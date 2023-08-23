const howManyFrogJump = function (x, y, k) {
  let tmp = 0;
  let hasil = 0;
  while (tmp <= y) {
    hasil += 1;
    tmp += k;
  }
  return hasil;
};

console.log(howManyFrogJump(10, 35, 30)); // 2
console.log(howManyFrogJump(10, 90, 1)); // 91
console.log(howManyFrogJump(10, 85, 30)); // sesuai soal
