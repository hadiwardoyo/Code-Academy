const pecahKalimat = (str) => {
  let temp = "";
  let hasil = [];
  for (let i = 0; i <= str.length; i++) {
    if (str.charAt(i) == " " || i == str.length) {
      hasil.push(temp);
      temp = "";
    } else {
      temp += str.charAt(i);
    }
  }
  return hasil;
};

console.log(
  pecahKalimat("buka puasa bersama teman kuliah sangat menyenangkan")
);

/**
 * Output :
[
  'buka',
  'puasa',
  'bersama',
  'teman',
  'kuliah',
  'sangat',
  'menyenangkan'
]
 */
