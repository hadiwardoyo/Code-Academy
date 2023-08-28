let angka = [1, 2, 3, 4, 5, 6, 7];

const countAverage = (numbers) => {
  let tmp = 0;
  for (let i = 0; i < numbers.length; i++) {
    tmp += numbers[i];
  }
  tmp = tmp / numbers.length;
  return tmp;
};

console.log(`Rata-Rata dari deret [${angka}] adalah : ${countAverage(angka)}`);

/**
 * Output :
Rata-Rata dari deret [1,2,3,4,5,6,7] adalah : 4
 */
