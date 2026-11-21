import { mkdir, writeFile } from "node:fs/promises";

const entry = `All week, Nora's whistle was only breath. On Thursday, one clear note crossed the porch.
The old dog lifted his head from the rug, then stood. She tried once more; he came over and rested his chin on her shoe.`;

await mkdir("/output", { recursive: true });
await writeFile("/output/entry.txt", entry, "utf8");
