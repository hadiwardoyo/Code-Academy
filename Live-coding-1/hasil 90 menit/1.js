/**
 * Toko "Si Dia"
 *
 * Toko "Si Dia" merupakan toko online yang menyediakan barang-barang keperluan "si dia". Vincent selaku pemilik toko tersebut ingin mengetahui jumlah dari harga terendah dan harga tertinggi dari kumpulan harga yang dimilikinya.
 *
 * Contoh :
 * let prices = [19, 5, 42, 2, 77]
 * Hasil yang di harapkan -> 79, karena 2 + 77 = 79
 *
 * let prices = [10, 30, 5, 500]
 * Hasil yang di harapkan -> 505, karena 5 + 500
 *
 * DIRECTIONS
 * ------------
 * Buatlah sebuah function yang memiliki 1 parameter prices berupa array. Lalu tentukan jumlah 2 harga terendah dan harga tertinggi dari prices yang diberikan.
 *
 * RULES : Tidak boleh menggunakan built in function!!
 * Kecuali: .push()
 * */

const sumPrices = (prices) => {
  let hasil = [];
  let minim = 0;
  let maksim = 0;
  if (prices[0] <= prices[1]) {
    minim = prices[0];
    maksim = prices[1];
  } else {
    minim = prices[1];
    maksim = prices[0];
  }
  for (let i = 2; i < prices.length; i++) {
    if (minim < prices[i] || maksim < prices[i]) {
      maksim = prices[i];
    } else {
      minim = prices[i];
    }
  }
  return maksim + minim;
};

console.log(sumPrices([19000, 5000, 42000, 2000, 77000]));
// 79000

console.log(sumPrices([10000, 30000, 5000, 500000]));
// 505000
console.log(sumPrices([1, 2, 3, 4, 5, 6, 7, 8]));
//9
/**
 * Output :
 79000
505000
9
 */
