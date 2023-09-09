const fs = require("fs");

class Turtle {
  constructor(id, name, species, price, patterns) {
    this.id = id;
    this.name = name;
    this.species = species;
    this.price = price;
    this.patterns = patterns;
  }
}

class SnappingTurtle extends Turtle {
  constructor(id, name, species, price, patterns, size, weight) {
    super(id, name, species, price, patterns);
    this.size = size;
    this.weight = weight;
  }
}

class Tortoise extends Turtle {
  constructor(id, name, species, price, patterns, size, weight) {
    super(id, name, species, price, patterns);
    this.size = size;
    this.weight = weight;
  }
}

class Terrapins extends Turtle {
  constructor(id, name, species, price, patterns, size, weight) {
    super(id, name, species, price, patterns);
    this.size = size;
    this.weight = weight;
  }
}

class TurtleBox {
  constructor(id, boxName, turtles) {
    this.id = id;
    this.boxName = boxName;
    this.turtles = turtles || [];
  }

  static getBoxes() {
    let data = JSON.parse(fs.readFileSync("./turtleboxes.json", "utf8"));
    data = data.map((element) => {
      let { id, boxName, turtles } = element;
      turtles = turtles.map((turtle) => {
        let { id, name, species, price, patterns, size, weight } = turtle;
        if (turtle.species.toLowerCase() === "snappingturtle") {
          return new SnappingTurtle(
            id,
            name,
            species,
            price,
            patterns,
            size,
            weight
          );
        } else if (turtle.species.toLowerCase() === "tortoise") {
          return new Tortoise(id, name, species, price, patterns, size, weight);
        } else if (turtle.species.toLowerCase() === "terrapins") {
          return new Terrapins(
            id,
            name,
            species,
            price,
            patterns,
            size,
            weight
          );
        }
      });

      return new TurtleBox(id, boxName, turtles);
    });
    return data;
  }

  // static showBoxes() {} untuk show, menggunakan method getBoxes lalu di tranfer ke view untuk diolah

  static createBox(params) {
    let nameBox = params.join(" "); //agar dapat dieksekusi tanpa input tanda petik
    let data = this.getBoxes();
    let id = data[data.length - 1].id + 1;
    let check = false;

    data.forEach((element) => {
      if (element.boxName.toLowerCase() === nameBox.toLowerCase()) {
        check = true;
      } else {
        check = check;
      }
    });

    if (check) {
      return "Box sudah ada sebelumnya";
    } else {
      data.push(new TurtleBox(id, nameBox));
      this.save(data);
      return "Box berhasil ditambahkan";
    }
  }

  static addTurtle(params) {
    let data = this.getBoxes();
    let [id, price, size, weight] = [0, 0, 0, 0];
    let [species, patterns] = [[], []];
    let message = "";
    let tmp = 1;

    let box_name = params[0];
    let turtle = params.slice(1);

    let name = turtle[0];

    if (isNaN(turtle[1])) {
      species = turtle[1];
      price = +turtle[2];
      if (isNaN(turtle[3])) {
        patterns = turtle[3].split(", ");
        size = +turtle[4];
        weight = +turtle[5];
      } else {
        patterns = [];
        size = +turtle[3];
        weight = +turtle[4];
      }
    } else {
      species = "SnappingTurtle";
      price = +turtle[1];
      if (isNaN(turtle[2])) {
        patterns = turtle[2].split(", ");
        size = +turtle[3];
        weight = +turtle[4];
      } else {
        patterns = [];
        size = +turtle[2];
        weight = +turtle[3];
      }
    }

    data.forEach((element) => {
      let { id, boxName, turtles } = element;
      if (boxName.toLowerCase() === box_name.toLowerCase()) {
        if (species.toLowerCase() == "snappingturtle") {
          turtles.length === 0
            ? (id = 1)
            : (id = turtles[turtles.length - 1].id + 1);

          turtles.push(
            new SnappingTurtle(id, name, species, price, patterns, size, weight)
          );
          tmp++;
        } else if (species.toLowerCase() == "tortoise") {
          turtles.length === 0
            ? (id = 1)
            : (id = turtles[turtles.length - 1].id + 1);
          turtles.push(
            new Tortoise(id, name, species, price, patterns, size, weight)
          );
          tmp++;
        } else if (species.toLowerCase() == "terrapins") {
          turtles.length === 0
            ? (id = 1)
            : (id = turtles[turtles.length - 1].id + 1);
          turtles.push(
            new Terrapins(id, name, species, price, patterns, size, weight)
          );
          tmp++;
        } else {
          tmp--;
        }
      }
    });

    if (tmp < 1) {
      message = "Unknown species, use show for more information";
    } else if (tmp > 1) {
      message = name + " has been successfully added to the " + box_name;
    } else {
      message = "Input the right Box Name";
    }
    this.save(data);

    // console.log(data[2].turtles.length);
    return message;
  }

  static sellTurtle(params) {
    let data = this.getBoxes();
    let idNew = +params[1];
    let box_name = params[0];
    let tmp = 0;
    let message = "";

    data = data.map((element) => {
      let { id, boxName, turtles } = element;
      if (box_name.toLowerCase() === boxName.toLowerCase()) {
        tmp++;
        turtles.forEach((element) => {
          if (element.id === idNew) {
            tmp++;
          }
        });
        turtles = turtles.filter((turtle) => turtle.id !== idNew);
      }

      return new TurtleBox(id, boxName, turtles);
    });

    if (tmp === 0) {
      message = "Turtle Not Found";
    } else if (tmp === 1) {
      message = "Turtle Not Found";
    } else {
      message = "Data has been deleted from " + box_name;
    }

    this.save(data);
    return message;
  }

  static countPrice(params) {
    let box_name = params[0];
    let data = this.getBoxes();
    let count = 0;
    let tmp = false;

    data.forEach((turtle) => {
      let { id, boxName, turtles } = turtle;
      if (boxName.toLowerCase() === box_name.toLowerCase()) {
        turtles.forEach((element) => {
          count += element.price;
        });
        tmp = true;
      } else {
        tmp = tmp;
      }
    });
    return [tmp, this.rupiahFormatter(count)];
  }

  static detailBox(params) {
    let box_name = params[0];
    let data = this.getBoxes();
    data = data.filter(
      (turtle) => box_name.toLowerCase() === turtle.boxName.toLowerCase()
    );

    if (data.length === 0) {
      return [false, "Box Name Not Found"];
    } else {
      return [true, data];
    }
  }

  static filter(params) {
    let species = params[0];
    let data = this.getBoxes();
    // let arr = [];
    let tmp = [];

    data.forEach((turtle) => {
      let { id, boxName, turtles } = turtle;
      tmp.push(
        turtles.filter(
          (element) => element.species.toLowerCase() === species.toLowerCase()
        )
      );
    });
    tmp = tmp.filter((element) => element.length !== 0);
    if (tmp.length === 0) {
      return [false, "Species not found"];
    } else {
      return [true, tmp];
    }
    console.log(tmp);
  }

  static rupiahFormatter(angka) {
    if (angka === undefined) {
      return "inputkan angka";
    } else {
      return angka.toLocaleString("id-ID", {
        style: "currency",
        currency: "IDR",
      });
    }
  }

  static save(data) {
    fs.writeFileSync("./turtleboxes.json", JSON.stringify(data, null, 3));
  }
}

module.exports = {
  Turtle,
  SnappingTurtle,
  Tortoise,
  Terrapins,
  TurtleBox,
};
