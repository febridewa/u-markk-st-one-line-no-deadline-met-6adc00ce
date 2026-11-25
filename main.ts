// One Line, No Deadline Met — make.fun entry.
// Writes a single-line joke excusing a missed deadline to /output/entry.txt.
// Gate: UTF-8 text, 1-200 characters, not only whitespace.
import { mkdirSync, writeFileSync } from "node:fs";

// v2: tightened the closing beat — "I never left" lands harder at the end
// than "I was here the whole time", and keeps the cornered-person voice.
const LINE =
  "I didn't miss the deadline \u2014 the deadline missed me, I never left.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
