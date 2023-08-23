const showGenap = function (n) {
  let tmp = n.split("");
  let hasil = [];
  for (let i = 0; i < tmp.length; i++) {
    tmp[i] % 2 == 0 ? hasil.push(tmp[i]) : null;
  }
  return hasil;
};

console.log(showGenap("234567893221414234234242342"));

// output :
// [
//     '2', '4', '6', '8', '2',
//     '2', '4', '4', '2', '4',
//     '2', '4', '2', '4', '2',
//     '4', '2'
//   ]
