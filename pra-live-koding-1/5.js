const checkPalindrome = (word) => {
  if (word == undefined || word.length == 0) {
    return "Inputkan Sebuah Kata";
  }
  let bool = true;
  let perbandingan = word.split("").reverse().join("");
  if (perbandingan === word) {
    return bool;
  } else {
    return !bool;
  }
};
console.log(checkPalindrome("katak")); // true
console.log(checkPalindrome("baso")); // false
console.log(checkPalindrome("")); // Masukan sebuah kata
console.log(checkPalindrome()); // Masukan sebuah kata

/**
 * Output :
 true
false
Inputkan Sebuah Kata
Inputkan Sebuah Kata
 */
