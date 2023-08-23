const factorial = function (n) {
  let tmp = 1;
  for (let i = 0; i < n; i++) {
    tmp = tmp * (n - i);
  }
  return tmp;
};

console.log(factorial(5)); // 120
console.log(factorial(3)); // 6
