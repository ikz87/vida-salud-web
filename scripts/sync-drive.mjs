import "dotenv/config";
import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";
import convert from "heic-convert";

const API_KEY = process.env.GOOGLE_API_KEY;
const ROOT_FOLDER_ID = process.env.DRIVE_ROOT_FOLDER_ID;
const PUBLIC_DIR = path.resolve("public/drive");
const MANIFEST_PATH = path.resolve("src/data/drive-manifest.json");

const IMAGE_MIMES = [
  "image/jpeg",
  "image/png",
  "image/webp",
  "image/gif",
  "image/svg+xml",
  "image/avif",
  "image/heic",
  "image/heif",
];
const VIDEO_MIMES = ["video/mp4", "video/webm", "video/quicktime"];

async function listFiles(folderId) {
  const items = [];
  let pageToken = "";

  do {
    const params = new URLSearchParams({
      q: `'${folderId}' in parents and trashed = false`,
      key: API_KEY,
      fields:
        "nextPageToken, files(id, name, mimeType, videoMediaMetadata, imageMediaMetadata)",
      pageSize: "1000",
    });
    if (pageToken) params.set("pageToken", pageToken);

    const res = await fetch(
      `https://www.googleapis.com/drive/v3/files?${params}`
    );
    if (!res.ok) {
      throw new Error(`Drive API error: ${res.status} ${await res.text()}`);
    }
    const data = await res.json();
    items.push(...(data.files || []));
    pageToken = data.nextPageToken || "";
  } while (pageToken);

  return items;
}

async function downloadFile(fileId, destPath) {
  const url = `https://drive.google.com/uc?export=download&id=${fileId}`;
  const res = await fetch(url, { redirect: "follow" });
  if (!res.ok) {
    console.warn(
      `  ⚠ Failed to download ${fileId}: ${res.status} ${res.statusText}`
    );
    return false;
  }

  let buffer = Buffer.from(await res.arrayBuffer());

  const ext = path.extname(destPath).toLowerCase();
  if (ext === ".heic" || ext === ".heif") {
    buffer = Buffer.from(
      await convert({ buffer, format: "JPEG", quality: 0.9 })
    );
  }

  const webpPath = destPath.replace(/\.[^.]+$/, ".webp");
  fs.mkdirSync(path.dirname(webpPath), { recursive: true });
  await sharp(buffer).webp({ quality: 80 }).toFile(webpPath);

  return webpPath;
}

function embedUrl(fileId) {
  return `https://drive.google.com/file/d/${fileId}/preview`;
}

function isImage(mimeType) {
  return IMAGE_MIMES.includes(mimeType);
}

function isVideo(mimeType) {
  return VIDEO_MIMES.includes(mimeType);
}

function isFolder(mimeType) {
  return mimeType === "application/vnd.google-apps.folder";
}

async function processFolder(folderId, relPath) {
  const entries = [];
  const files = await listFiles(folderId);

  const subfolders = files.filter((f) => isFolder(f.mimeType));
  const media = files.filter(
    (f) => isImage(f.mimeType) || isVideo(f.mimeType)
  );

  for (const file of media) {
    const sanitized = file.name.replace(/[^a-zA-Z0-9._-]/g, "_");

    if (isImage(file.mimeType)) {
      const filePath = path.join(relPath, sanitized);
      const destPath = path.join(PUBLIC_DIR, filePath);

      console.log(`  ↓ downloading ${filePath}`);
      const webpPath = await downloadFile(file.id, destPath);
      if (!webpPath) continue;

      const webpRelPath = path.relative(PUBLIC_DIR, webpPath);
      entries.push({
        type: "image",
        name: file.name,
        path: `/drive/${webpRelPath}`,
      });
    } else if (isVideo(file.mimeType)) {
      console.log(`  🎬 video  ${file.name}`);
      entries.push({
        type: "video",
        name: file.name,
        embedUrl: embedUrl(file.id),
      });
    }
  }

  const children = {};
  for (const folder of subfolders) {
    const folderRel = path.join(
      relPath,
      folder.name.replace(/[^a-zA-Z0-9._-]/g, "_")
    );
    console.log(`\n📁 ${folderRel}/`);
    children[folder.name] = await processFolder(folder.id, folderRel);
  }

  return { entries, children };
}

function buildManifest(tree) {
  const manifest = {};

  for (const [name, subtree] of Object.entries(tree.children)) {
    const key = name.toLowerCase();

    if (key === "galeria") {
      const galeria = {};
      for (const [catName, catTree] of Object.entries(subtree.children)) {
        galeria[catName] = catTree.entries;
      }
      if (subtree.entries.length) {
        galeria["_uncategorized"] = subtree.entries;
      }
      manifest[key] = galeria;
    } else {
      manifest[key] = subtree.entries;
    }
  }

  return manifest;
}

async function main() {
  if (!API_KEY || !ROOT_FOLDER_ID) {
    console.error(
      "Missing GOOGLE_API_KEY or DRIVE_ROOT_FOLDER_ID in environment"
    );
    process.exit(1);
  }

  console.log("🔄 Syncing Google Drive → public/drive/\n");

  if (fs.existsSync(PUBLIC_DIR)) {
    fs.rmSync(PUBLIC_DIR, { recursive: true, force: true });
    console.log("🗑  Cleared public/drive/\n");
  }
  fs.mkdirSync(PUBLIC_DIR, { recursive: true });

  console.log(`📁 / (root)`);
  const tree = await processFolder(ROOT_FOLDER_ID, "");
  const manifest = buildManifest(tree);

  fs.mkdirSync(path.dirname(MANIFEST_PATH), { recursive: true });
  fs.writeFileSync(MANIFEST_PATH, JSON.stringify(manifest, null, 2));
  console.log(`\n✅ Manifest written to ${MANIFEST_PATH}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
