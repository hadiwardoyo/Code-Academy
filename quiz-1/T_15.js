const segitiga = function (n, posisi) {
  if (posisi === "bawah") {
    for (let i = 0; i <= n; i++) {
      for (let k = 0; k < n - i; k++) {
        process.stdout.write(" ");
      }
      for (let j = 0; j < i; j++) {
        process.stdout.write("*");
      }

      process.stdout.write("\n");
    }
  } else {
    for (let i = 0; i <= n; i++) {
      for (let k = i; k < n; k++) {
        process.stdout.write("*");
      }
      for (let j = 0; j <= i; j++) {
        process.stdout.write(" ");
      }

      process.stdout.write("\n");
    }
  }
};
segitiga(5, "bawah");
console.log("----------");
segitiga(5, "atas");

// output :
//     *
//    **
//   ***
//  ****
// *****
// ----------
// *****
// ****
// ***
// **
// *
