const countXO = (str) => {
  let tmp = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "x") {
      tmp++;
    } else {
      tmp--;
    }
  }
  tmp > 0 ? (tmp = false) : (tmp = false);
  return tmp;
};
console.log(countXO("xoxoxoxxoo"));
console.log(countXO("xoxox"));

/**
 * Output :
 
 */
