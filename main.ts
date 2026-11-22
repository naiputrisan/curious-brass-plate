import { mkdirSync, writeFileSync } from "node:fs";

// One short text, written to make its reader curious: a small, concrete
// mystery — a nameplate that should not exist, kept polished by no one.
const entry =
  "The brass plate beside the door reads 'Dr. A. Marlowe, hours by appointment.' The building was demolished in 1974. Yesterday someone rang the bell. The plate was polished, as if touched every day.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");

console.log(`Wrote ${[...entry].length} characters to /output/entry.txt`);
