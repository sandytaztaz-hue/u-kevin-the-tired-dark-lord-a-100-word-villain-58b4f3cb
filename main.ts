import { mkdirSync, writeFileSync } from "node:fs";

// A 100-word monologue for a fantasy villain who is secretly just very
// tired. The tiredness lives in the rhythm, the pauses and the small
// deflections — the villain never says he is tired or weary. Lord Voss
// of the Hollow Marches: thirty years ago he raised an army of the dead
// to take a valley; they stayed and want pensions. The dragon eats four
// sheep every week, never on Sundays. The north tower roof leaks onto
// his old maps. His scheme — the eclipse, the bell, the kingdom
// kneeling — still stands, just not tonight. The sting lands last:
// come back Thursday, and bring nails.
const ENTRY =
  "Hero. Nineteenth this month, and the last eighteen left their boots — I keep them piled, from habit. I am Voss, Lord of the Hollow Marches. Thirty years ago I raised an army of the dead to take this valley. They stayed. They still want pensions. The dragon eats four sheep every week, never on Sundays, and the north tower roof leaks onto my old maps. The plan stands — the eclipse, the bell, the kingdom kneeling — not tonight. Tonight I have a roof to patch, a ghost to settle, and one threat left. Come back Thursday. Bring nails.";

// Gate: the sealed scorer requires 1 to 600 characters of UTF-8 text.
// The judge's brief wants about 100 words: this monologue is exactly 100
// words (whitespace split) and 533 characters.
const words = ENTRY.trim().split(/\s+/);
if (words.length !== 100) {
  throw new Error(`entry is ${words.length} words, must be exactly 100`);
}
if (ENTRY.length < 1 || ENTRY.length > 600) {
  throw new Error(`entry is ${ENTRY.length} chars, must be 1-600`);
}
if (/tired|weary/i.test(ENTRY)) {
  throw new Error("tiredness must be felt, never announced");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(`wrote ${words.length} words, ${ENTRY.length} chars to /output/entry.txt`);
