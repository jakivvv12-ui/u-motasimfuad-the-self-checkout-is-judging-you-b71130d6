import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const line = "Unexpected item in bagging area: a family-size lasagna, one spoon, and the confidence to call it a snack.";

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), `${line}\n`, "utf8");
