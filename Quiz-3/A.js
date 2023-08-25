/**
 * =================================================================
 * ELECTION DAY
 * =================================================================
 *
 */

const countVote = (votes) => {
  let result = {};
  let vote = 0;
  let winner = "";

  if (!votes.length) return console.log("Tak Ada Suara");

  for (const element of votes) {
    if (result[element]) {
      result[element] += 1;
    } else {
      result[element] = 1;
    }
  }
  for (const element in result) {
    if (result[element] > vote) {
      vote = result[element];
      winner = element;
    }

    console.log(result);

    return console.log(
      `Pemenangnya adalah ${winner} dengan perolehan suara ${vote} \n`
    );
  }
};
// Test case
console.log("Contoh 1 ");
countVote([
  "vincent",
  "ncent",
  "vincent",
  "james",
  "ncent",
  "james",
  "vincent",
]);

console.log("Contoh 2 ");
countVote([]);

/**
 * Output :
 Contoh 1 
{ vincent: 3, ncent: 2, james: 2 }
Pemenangnya adalah vincent dengan perolehan suara 3

Contoh 2
Tak Ada Suara
 */
