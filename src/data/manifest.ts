import manifest from "./drive-manifest.json";

export interface MediaImage {
  type: "image";
  name: string;
  path: string;
}

export interface MediaVideo {
  type: "video";
  name: string;
  embedUrl: string;
}

export type MediaEntry = MediaImage | MediaVideo;

export interface DriveManifest {
  galeria: Record<string, MediaEntry[]>;
  voluntarios: MediaImage[];
  eventos: MediaImage[];
}

export const driveManifest = manifest as unknown as DriveManifest;
