/**
 * ===============================
 * Pair Programming
 * ===============================
 */

const pairStudent = (students) => {
  let result = [];

  if (students.length % 2 === 1) {
    return "Jumlah peserta harus genap";
  }
  for (let i = 0; i < students.length; i++) {
    for (let j = i + 1; j < students.length; j++) {
      if (students[i] && students[j] && students[i][0] !== students[j][0]) {
        result.push(`${students[i]} - ${students[j]}`);
        students[i] = students[j] = null;
        break;
      }
    }
  }
  return result;
};

console.log(
  pairStudent([
    "Cena",
    "Charice",
    "Bertha",
    "George",
    "Accio",
    "Abe",
    "Ann",
    "Charlie",
    "Danish",
    "Eugene",
  ])
);

console.log(pairStudent(["Cena", "Charice", "Bertha", "George", "Accio"]));

/**
 * Output :
 [
  'Cena - Bertha',
  'Charice - George',
  'Accio - Charlie',
  'Abe - Danish',
  'Ann - Eugene'
]
Jumlah peserta harus genap
 */
