/**
 * =============================================================================
 * PRINT BILANGAN PRIMA
 * ===============================================================================
 */
let n = 12;
const cekPrima = (angka) => {
  let tmp = 0;
  for (let i = 0; i <= angka; i++) {
    if (angka % i == 0) {
      tmp += 1;
    }
  }
  if (tmp == 2) {
    return true;
  } else {
    return false;
  }
};
const printPrima = (jumlah) => {
  for (let i = 0; i < jumlah; i++) {
    if (cekPrima(i)) {
      console.log(i);
    } else {
      jumlah += 1;
    }
  }
};
console.log(`Berikut List ${n} bilangan prima pertama`);
console.log(printPrima(n));

/**
 * Output :
 Berikut List 12 bilangan prima pertama
2
3
5
7
11
13
17
19
23
29
31
37
 */
