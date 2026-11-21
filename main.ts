import { mkdir, writeFile } from "node:fs/promises";

const entry = `I carried my mug to the step where the new neighbor sat. 'I'm Ada,' I said. I sat beside her. For a while we watched a beetle climb the toe of my shoe. I kept my foot still until it reached the grass.`;

await mkdir("/output", { recursive: true });
await writeFile("/output/entry.txt", entry, "utf8");
