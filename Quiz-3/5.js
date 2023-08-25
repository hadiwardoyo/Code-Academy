/**
 * =================================================================
 * REVERSE LADDER
 * =================================================================
 */
const reverseLadder = (str) => {
  let items = "";
  if (str.length % 2 == 1) {
    for (let i = 0; i < str.length; i++) {
      if (i % 2 == 0) {
        items = items.split("").reverse().join("");
        items += str.charAt(i).toUpperCase();
      } else {
        items += str.charAt(i).toLowerCase();
        items = items.split("").reverse().join("");
      }
      console.log(items);
    }
  } else {
    console.log("JUMLAH HURUF TIDAK BOLEH GENAP");
  }
  return console.log(items);
};

reverseLadder("basic javascript ");
reverseLadder("basicc");

/**
 * Output :
 B
aB
BaS
iSaB
BaSiC
 CiSaB
BaSiC J
aJ CiSaB
BaSiC JaV
aVaJ CiSaB
BaSiC JaVaS
cSaVaJ CiSaB
BaSiC JaVaScR
iRcSaVaJ CiSaB
BaSiC JaVaScRiP
tPiRcSaVaJ CiSaB
BaSiC JaVaScRiPt
BaSiC JaVaScRiPt
JUMLAH HURUF TIDAK BOLEH GENAP
 */
