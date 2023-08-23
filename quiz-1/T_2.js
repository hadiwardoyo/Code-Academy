const reverse = function (n) {
  let hasil = "";
  while (n > 0) {
    let tmp = n % 10;
    hasil += `${tmp}`;
    n = Math.floor(n / 10);
  }
  return hasil;
};
console.log(reverse(1111122222));
console.log(reverse(123456789));
console.log(reverse(1234)); // sesuai contoh
