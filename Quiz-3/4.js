/**
 * =================================================================
 * PRINT KOTAK
 * =================================================================
 */
let n = 10;
const kotak = (number) => {
  for (let i = 1; i <= number; i++) {
    if (i == 1 || i == number) {
      for (let j = 1; j <= number; j++) {
        process.stdout.write("#");
      }
      process.stdout.write("\n");
    } else {
      for (let k = 1; k <= number; k++) {
        if (k == 1 || k == number) {
          process.stdout.write("#");
        } else {
          process.stdout.write(" ");
        }
      }
      process.stdout.write("\n");
    }
  }
};
console.log(`input = ${n}`);
kotak(n);

/**
 * Output :
input = 10
##########
#        #
#        #
#        #
#        #
#        #
#        #
#        #
#        #
##########
 */
