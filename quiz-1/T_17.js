const countValley = function (valley) {
  let tmp = 0;
  let gunung = 0;
  let level = 0;
  for (const data of valley) {
    if (data === "U") {
      level += 1;
    } else {
      level -= 1;
      level == 0 ? (gunung += 1) : gunung;
    }
  }
  return console.log(gunung);
};
countValley("UDDUDUU"); // 1
countValley("UDUDUDUDUD"); // 5
countValley("DDDUUUUDU"); // 1
countValley("UDDDUUUD"); // 2
