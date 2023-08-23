const howManyWord = function (s) {
  let tmp = s.split(" ");
  let jumlah = 0;
  for (let i = 0; i < tmp.length; i++) {
    jumlah += 1;
  }
  return jumlah;
};
console.log(howManyWord("aku suka makan bayam yang mentah")); // 6
console.log(howManyWord("aku suka javascript fullstack")); // sesuai soal
console.log(howManyWord("Rahmat")); // 1
