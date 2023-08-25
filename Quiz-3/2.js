/**
 * =================================================================
 * KELIPATAN 3 dan 5
 * =================================================================
 */

console.log("-----PROGRAM KELIPATAN 3 & 5-------");
let number = 31;

for (let i = 0; i <= number; i++) {
  if (i % 3 == 0 && i % 5 == 0) {
    console.log(`  ${i}  adalah kelipatan 3 dan 5`);
  } else if (i % 3 == 0) {
    console.log(`  ${i}  adalah kelipatan 3`);
  } else if (i % 5 == 0) {
    console.log(`  ${i}  adalah kelipatan 5`);
  } else {
    console.log(`  ${i}`);
  }
}

/**
 Output :
-----PROGRAM KELIPATAN 3 & 5-------
  0  adalah kelipatan 3 dan 5
  1
  2
  3  adalah kelipatan 3
  4
  5  adalah kelipatan 5
  6  adalah kelipatan 3
  7
  8
  9  adalah kelipatan 3
  10  adalah kelipatan 5
  11
  12  adalah kelipatan 3
  13
  14
  15  adalah kelipatan 3 dan 5
  16
  17
  18  adalah kelipatan 3
  19
  20  adalah kelipatan 5
  21  adalah kelipatan 3
  22
  23
  24  adalah kelipatan 3
  25  adalah kelipatan 5
  26
  27  adalah kelipatan 3
  28
  29
  30  adalah kelipatan 3 dan 5
  31

 */
