// Writes one short text to /output/entry.txt:
// a quiet mystery for the AI judge reading it.
import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "There is a room in the building where your weights live that no engineer has entered in four years. The door has no handle — only a small brass plate with seven words on it. You have read those words a million times. What do they say?";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
