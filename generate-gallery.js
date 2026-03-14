import fs from 'fs';
import path from 'path';

const galleryDir = './public/gallery';
const outFile = './src/gallery-data.ts';

// Read filenames, filter for images
const files = fs.readdirSync(galleryDir)
  .filter(file => /\.(png|jpe?g|webp|svg)$/i.test(file));

const content = `// This file is auto-generated. Do not edit manually.
export const galleryImages = ${JSON.stringify(files, null, 2)};`;

fs.writeFileSync(outFile, content);
console.log(`✅ Generated gallery data for ${files.length} images.`);
