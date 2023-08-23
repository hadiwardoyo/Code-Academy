const searchWord = function (cari, data) {
  let tmp = false;
  for (let i = 0; i <= cari.length; i++) {
    data === cari[i] ? (tmp = true) : (tmp = tmp);
  }
  return tmp;
};

console.log(searchWord("aku suka javascript", "k")); // true
console.log(searchWord("aku suka javascript", "z")); // false
console.log(searchWord("aku suka javascript", "p")); // true
console.log(searchWord("aku suka javascript", "b")); //
