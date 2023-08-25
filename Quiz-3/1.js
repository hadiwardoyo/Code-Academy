/**
 * ============
 * ACCESS LEVEL
 * ============
 */

const accessLevel = (acc, lvl) => {
  switch (acc) {
    case "public":
      if (lvl == 5) {
        console.log("Public five");
      } else if (lvl < 5) {
        console.log("Public di bawah 5");
      } else if (lvl > 5) {
        console.log("Public di atas 5");
      }
      break;
    case "private":
      if (lvl == 5) {
        console.log("Private five");
      } else if (lvl < 5) {
        console.log("Private di bawah 5");
      } else if (lvl > 5) {
        console.log("Private di atas 5");
      }
      break;
    case "protected":
      if (lvl == 5) {
        console.log("Prtected five");
      } else if (lvl < 5) {
        console.log("Prtected di bawah 5");
      } else if (lvl > 5) {
        console.log("Prtected di atas 5");
      }
      break;
    default:
      console.log("Access is not defined");
  }
};
console.log(" ---------PUBLIC--------");
accessLevel("public", 2);
accessLevel("public", 5);
accessLevel("public", 8);
console.log(" ---------PRIVATE--------");
accessLevel("private", 2);
accessLevel("private", 5);
accessLevel("private", 8);
console.log(" ---------PROTECTED--------");
accessLevel("protected", 2);
accessLevel("protected", 5);
accessLevel("protected", 8);

/**
 * Output :
  ---------PUBLIC--------
Public di bawah 5
Public five
Public di atas 5
 ---------PRIVATE--------
Private di bawah 5
Private five
Private di atas 5
 ---------PROTECTED--------
Prtected di bawah 5
Prtected five
Prtected di atas 5
 */
