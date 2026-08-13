import fs from "fs";
import path from "path";

const galleryPath = path.join(process.cwd(), "public", "gallery");

const files = fs
  .readdirSync(galleryPath)
  .filter((file) => /\.(jpg|jpeg|png|webp|avif)$/i.test(file))
  .sort();

const output = `export const galleryImages = ${JSON.stringify(files, null, 2)} as const;\n`;

fs.writeFileSync(
  path.join(process.cwd(), "app", "galleryImages.ts"),
  output
);

console.log(`Generated gallery with ${files.length} images.`);