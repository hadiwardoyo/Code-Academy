const deretRam = function (n) {
  let tmp = 1;
  let hasil = [];
  for (let i = 0; i < n; i++) {
    hasil.push(tmp);
    tmp *= 2;
  }
  return hasil;
};

console.log(deretRam(7));
console.table(deretRam(7)); // tampilan table
console.log(deretRam(12));
