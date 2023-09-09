class TurtleView {
  static message(message) {
    console.log("\n==========================");
    console.log(message);
    console.log("============================\n");
  }

  static help() {
    console.log("\n==========================");
    console.log("index help");
    console.log("index show");
    console.log("index createBox <box_name>");
    console.log(
      "index add <box_name> <name,species,price,patterns,size, weight>"
    );
    console.log("index sell <box_name> <turtle.id>");
    console.log("index countPrice <box_name>");
    console.log("index detail <box_name>");
    console.log("index filter <species>");
    console.log("==========================\n");
  }

  static showBox(data) {
    console.log("\nList of Box in our store: ");

    data.forEach((element, index) => {
      console.log(
        `${index + 1}. ${element.boxName} - ${element.turtles.length} turtles`
      );
    });
    console.log("===========================\n");
  }

  static showBoxDetail(data, nameBox) {
    console.log("\n==========================");
    if (data[0]) {
      data[1][0].turtles.forEach((element, index) => {
        console.log(
          `${index + 1}. ${element.name} - price: Rp${element.price},00`
        );
      });
    } else {
      console.log(data[1]);
    }

    console.log("\n==========================");
  }
  static filter(data, species) {
    console.log("\n==========================");

    if (data[0]) {
      let tmp = 0;
      data[1].forEach((element) => {
        element.forEach((component) => {
          tmp++;
          console.log(
            `${tmp}. ${component.name} - Rp. ${component.price}, size: ${component.size} cm, weight: ${component.weight} gram . `
          );
        });
      });
    } else {
      console.log(data[1]);
    }

    console.log("\n==========================");
  }

  static totalPrice(message, boxName) {
    console.log("\n==========================");
    message[0]
      ? console.log(`Total Price of ${boxName} box is ${message[1]}`)
      : console.log(`${boxName} box is not defines`);
    console.log("============================\n");
  }
}

module.exports = TurtleView;
