// News Image — Saturday, 21 November 2026.
//
// The entry is one picture, entry.png, already sitting in this
// repository. This program puts a copy of it at <output>/entry.png
// and nothing else.
//
// The output directory is a Docker mount point where the grader runs
// it, so the program must never delete that directory itself: removing
// a mount point fails with EBUSY and the whole run fails. It creates
// the directory when it is missing and clears only the files inside.
import * as fs from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const repoRoot = dirname(fileURLToPath(import.meta.url));
const picture = join(repoRoot, "entry.png");
const targetDir = resolve(process.env.MAKEFUN_OUTPUT_DIR ?? "/output");

function clearContents(dir) {
  fs.mkdirSync(dir, { recursive: true });
  for (const name of fs.readdirSync(dir)) {
    fs.rmSync(join(dir, name), { recursive: true, force: true });
  }
}

if (!fs.existsSync(picture)) {
  throw new Error(`entry picture is missing: ${picture}`);
}

clearContents(targetDir);
fs.cpSync(picture, join(targetDir, "entry.png"));
