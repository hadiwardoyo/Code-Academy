class FarmView {
  static help() {
    console.log("\n-- List of Command farm --");
    console.log("================================");
    console.log("farm help");
    console.log("farm show");
    console.log("farm create <farm_name>");
    console.log("farm details <farm_name>");
    console.log("farm add <farm_name> <livestock_type>");
    console.log("farm sell <farm_name> <livestock_id>");
    console.log("farm totalProduce <farm_name>");
    console.log("farm sort <sort_type(produce/livestocks)>");
    console.log("================================\n");
  }

  static message(msg) {
    console.log("\n================================");
    console.log(msg);
    console.log("================================\n");
  }

  static show(data) {
    console.log("\n-- List of Farm we have--");
    console.log("================================");
    data.forEach((element, index) => {
      console.log(
        `${index + 1}. "${element.name}" has ${
          element.livestocks.length
        } livestocks`
      );
    });
    console.log("================================\n");
  }

  static details(data, farmName) {
    if (data[0]) {
      console.log(`${farmName} stats:`);
      console.log("================================");
      data[1][0].livestocks.forEach((element, index) => {
        let { id, type, eggs, milks, wools } = element;
        if (type === "chicken") {
          console.log(`${id}. Chicken, egg: ${eggs}`);
        } else if (type === "cow") {
          console.log(`${id}. Cow, milks: ${milks}`);
        } else if (type === "sheep") {
          console.log(`${id}. Sheep, wools: ${wools}`);
        }
      });

      console.log("================================\n");
    } else {
      this.message(data[1]);
    }
  }

  static sort(data, type) {
    type = type[0];
    switch (type) {
      case "produce":
        console.log("================================");
        data[0].forEach((element, index) => {
          console.log(
            `${index + 1}. "${element.name}": ${data[1][index]} produce`
          );
        });

        break;
      case "livestocks":
        console.log("================================");
        data[0].forEach((element, index) => {
          console.log(
            `${index + 1}. "${element.name}": ${
              element.livestocks.length
            } livestock`
          );
        });
        break;
      default:
        console.log("================================");
        console.log("Wrong Input");
        console.log("================================");
        break;
    }
  }
}

module.exports = FarmView;
