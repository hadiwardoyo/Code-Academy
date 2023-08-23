const sum = function (n) {
  let hasil = 0;

  while (n > 0) {
    hasil += n % 10;
    n = Math.floor(n / 10);
  }
  return hasil;
};
console.log(sum(1111111111));
console.log(sum(123456789));
console.log(sum(3456)); // sesuai contoh
