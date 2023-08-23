const isPalindrome = function (s) {
  let lower = s.toLowerCase();
  let tmp = "";
  for (let i = 0; i < lower.length; i++) {
    tmp += lower.charAt(lower.length - i - 1);
  }
  return tmp == lower;
};

console.log(isPalindrome("kasur Ini Rusak")); //true
console.log(isPalindrome("kasur Ini Jusak")); //false
console.log(isPalindrome("Ibu Ratna antar ubi")); //true
console.log(isPalindrome("belajar coding")); //false
