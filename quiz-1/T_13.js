const maxWordLength = function (n) {
  let tmp = n.split(" ");
  let hasil = "";
  let max = 0;

  for (let i = 0; i < tmp.length; i++) {
    if (tmp[i].length > max) {
      max = tmp[i].length;
      hasil = tmp[i];
    }
  }
  return hasil;
};

console.log(maxWordLength("Saya suka bootcamp sentul city di code acad"));
// output = bootcamp
