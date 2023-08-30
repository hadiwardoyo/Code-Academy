let fs = require("fs");

const turtleBox = {
  getBoxes: function () {
    let data = fs.readFileSync("turtleboxes.json", "utf8");
    return (data = JSON.parse(data));
  },

  showBoxes: function () {
    let arr = this.getBoxes();

    console.log("Kotak Kura-kura di toko saya: ");

    for (let nomor in arr) {
      console.log(
        `${arr[nomor].id}. ${arr[nomor].boxName} - ${arr[nomor].turtles.length} Turtle`
      );
    }
  },

  addTurtle: function (boxName, name, species, price, patterns, size, weight) {
    let arr = this.getBoxes();

    let tmp = [];
    tmp.push(patterns);
    arr.forEach((element) => {
      if (element.boxName == boxName) {
        element.turtles.push({
          id: element.turtles.length + 1,
          name: name,
          species: species,
          price: price,
          patterns: tmp,
          size: size,
          weight: weight,
        });
      } else {
        console.log("Nama Box Anda Tidak Ada");
      }
    });
    this.saveJS(arr);
    console.log("DATA BERHASIL DI INPUT");
  },

  sellTurtle: function (boxName, id) {
    let arr = this.getBoxes();
    let tmpArray = [];
    let tmpId = 1;

    arr.forEach((element) => {
      if (element.boxName == boxName) {
        element.turtles.forEach((turtle) => {
          if (turtle.id !== id) {
            turtle.id = tmpId;
            tmpArray.push(turtle);
            tmpId += 1;
          }
        });
        element.turtles = tmpArray;
      }
    });
    this.saveJS(arr);
  },

  countTotalPrice: function (boxName) {
    let jumlah = 0;
    let arr = this.getBoxes();
    for (let key in arr) {
      if (arr[key].boxName == boxName) {
        for (const element of arr[key].turtles) {
          jumlah += element.price;
        }
      }
    }

    console.log(`Total harga dari box ${boxName} adalah ${jumlah}`);
  },

  boxDetails: function (boxName) {
    let arr = this.getBoxes();
    for (let key in arr) {
      if (arr[key].boxName == boxName) {
        console.log(`turtles in "${boxName}" box are :\n`);
        for (const element of arr[key].turtles) {
          const { id, name, species, size, weight, price, patterns } = element;

          console.log(
            `${id}. ${name} - ${price}\n Species: ${species}, size: ${size} cm, Weight: ${weight} .\n pattern: ${patterns}`
          );
          console.log("--------------------------------");
        }
      }
    }
  },

  saveJS: function (arr) {
    let trackStringify = JSON.stringify(arr, null, 3);
    // console.log(trackStringify)
    fs.writeFileSync("turtleboxes.json", trackStringify);
  },
};

// turtleBox.addTurtle(
//   "Snappy Garden",
//   "Rare Snappy turtle",
//   "SnappingTurtle",
//   1200000,
//   "blue, yellow",
//   4,
//   500
// );
// turtleBox.countTotalPrice("Land and Sea");
// turtleBox.showBoxes();
// turtleBox.sellTurtle("Land and Sea", 1);
// turtleBox.boxDetails("Land and Sea");

/**
 * catt : berhasil menerapkan seluruh fungsi yang diminta (a-f)
 */
