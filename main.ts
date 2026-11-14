import { copyFile, mkdir } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const scriptDirectory = dirname(fileURLToPath(import.meta.url));
const outputDirectory = process.env.MAKEFUN_OUTPUT_DIR || "/output";

await mkdir(outputDirectory, { recursive: true });
// Copy the PNG as bytes; do not decode or transform its contents.
await copyFile(
  join(scriptDirectory, "entry.png"),
  join(outputDirectory, "entry.png"),
);
