let angka = 24;

const cekJumlahFaktor = (num) => {
  let temp = 0;
  for (let i = 1; i <= num; i++) {
    if (num % i == 0) {
      temp += 1;
    }
  }
  return temp;
};
console.log(`Jumlah faktor dari ${angka} adalah : ${cekJumlahFaktor(angka)}`);

/**
 * Output :
 Jumlah faktor dari 24 adalah : 8
 */
