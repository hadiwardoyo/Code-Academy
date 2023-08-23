const deretSatu = function (k) {
  let hasil = [];
  let tmp = "";
  for (let i = 0; i < k; i++) {
    tmp += "1";
    hasil.push(tmp);
  }
  return hasil;
};
console.log(deretSatu(6));
console.log(deretSatu(3)); // [ '1', '11', '111' ]
