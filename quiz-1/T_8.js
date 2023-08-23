const deretNegation = function (k) {
  let tmp = -1;
  let hasil = [];
  for (let i = 1; i <= k; i++) {
    hasil.push(tmp);
    tmp <= 0 ? (tmp *= -1) : (tmp = (tmp + 1) * -1);
  }
  return hasil;
};
console.log(deretNegation(4)); // -1,1,-2,2
console.log(deretNegation(25)); //sesuai soal
