const fs = require("fs");

class LiveStocks {
  constructor(id, type) {
    this.id = id;
    this.type = type;
  }
}
class Chicken extends LiveStocks {
  constructor(id, type, eggs) {
    super(id, type);
    this.eggs = eggs;
  }
}
class Cow extends LiveStocks {
  constructor(id, type, milks) {
    super(id, type);
    this.milks = milks;
  }
}
class Sheep extends LiveStocks {
  constructor(id, type, wools) {
    super(id, type);
    this.wools = wools;
  }
}

class Farm {
  constructor(id, name, livestocks) {
    this.id = id;
    this.name = name;
    this.livestocks = livestocks || [];
  }

  static getFarm() {
    let data = JSON.parse(fs.readFileSync("./data.json", "utf8"));

    data = data.map((element) => {
      let { id, name, livestocks } = element;
      livestocks = livestocks.map((livestock) => {
        let { id, type, eggs, milks, wools } = livestock;
        if (type.toLowerCase() === "chicken") {
          return new Chicken(id, type, eggs);
        } else if (type.toLowerCase() === "cow") {
          return new Cow(id, type, milks);
        } else if (type.toLowerCase() === "sheep") {
          return new Sheep(id, type, wools);
        }
      });
      return new Farm(id, name, livestocks);
    });
    return data;
  }

  static createFarm(nameFarm) {
    let data = this.getFarm();
    nameFarm = nameFarm[0].toLowerCase();
    let id = data[data.length - 1].id + 1;

    let tmp = data.find((x) => x.name.toLowerCase() === nameFarm);

    if (tmp === undefined) {
      data.push(new Farm(id, nameFarm));
      this.save(data);
      return `Farm "${nameFarm}" has been added`;
    } else {
      return " ! the name of the farm already existed, use another name";
    }

    // console.log(tmp);
  }

  static details(nameFarm) {
    let data = this.getFarm();
    nameFarm = nameFarm[0];
    data = data.filter(
      (farm) => nameFarm.toLowerCase() === farm.name.toLowerCase()
    );

    if (data.length === 0) {
      return [false, "Farm does not exist"];
    } else {
      return [true, data];
    }
  }
  static addLivestock(params) {
    let data = this.getFarm();
    let farmName = params[0].toLowerCase();
    let type = params[1];
    let random = Math.floor(Math.random() * 10) + 1;
    let hasil = "";
    let id = 0;

    if (type === "chicken") {
      hasil = "eggs";
    } else if (type === "cow") {
      hasil = "milks";
    } else {
      hasil = "wools";
    }

    let index1 = data.findIndex((x) => {
      return x.name === farmName;
    });

    if (index1 === -1) {
      return "Farm not found";
    } else {
      let index2 = data[index1].livestocks.findIndex((x) => {
        return x.type === type;
      });
      data[index1].livestocks.forEach((element) => {
        if (element.type.toLowerCase() === type) {
          element[hasil] += random;
        }
      });

      if (data[index1].livestocks.length === 0 || index2 === -1) {
        if (data[index1].livestocks.length === 0) {
          id = 1;
        } else {
          id =
            data[index1].livestocks[data[index1].livestocks.length - 1].id + 1;
        }
        if (type.toLowerCase() === "chicken") {
          data[index1].livestocks.push(new Chicken(id, type, random));
        } else if (type.toLowerCase() === "cow") {
          data[index1].livestocks.push(new Cow(id, type, random));
        } else if (type.toLowerCase() === "sheep") {
          data[index1].livestocks.push(new Sheep(id, type, random));
        }
      }
    }
    this.save(data);
    return `a ${type} has been add ${random}:${hasil} to ${farmName}`;
  }

  static save(data) {
    fs.writeFileSync("./data.json", JSON.stringify(data, null, 3));
  }
}

module.exports = {
  LiveStocks,
  Chicken,
  Cow,
  Sheep,
  Farm,
};
