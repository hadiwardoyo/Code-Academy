const isCharsUnique = (str) => {
  let arr = str.split("");
  let simpan = true;
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        simpan = false;
      }
    }
  }
  return console.log(simpan);
};

isCharsUnique("abcdefghijklmnopqrstuvwxyz");
isCharsUnique("abcdefga");
isCharsUnique("qazwsxedcrfvtgb");
isCharsUnique("uhyguhyg");

/**
 * Output :
true
false
true
false
 */
