const fs = require("fs");

class WineModel {
  constructor(id, name, year, type, createdAt) {
    this.id = id;
    this.name = name;
    this.year = year;
    this.type = type;
    this.createdAt = createdAt;
  }
  static getWines() {
    let data = JSON.parse(fs.readFileSync("./wines.json", "utf8"));
    data = data.map((wine) => {
      let { id, name, year, type, createdAt } = wine;
      return new WineModel(id, name, year, type, createdAt);
    });
    return data;
  }

  static add(params) {
    let arr = params.split("/");
    let type = "";
    let year = +arr[1];
    if (arr[2] === "r" || arr[2] === "R") {
      type = "Red";
    } else if (arr[2] === "w" || arr[2] === "W") {
      type = "White";
    } else {
      type = "other";
    }

    let data = this.getWines();
    let tmp = data[data.length - 1].id + 1;
    let date = new Date();
    let create_at = date.toISOString().slice(0, 10);

    data.push(new WineModel(tmp, arr[0], year, type, create_at));

    this.save(data);
    return true;
  }

  static sell(wines_id) {
    let data = this.getWines();
    wines_id = +wines_id[0];
    data = data.filter((arr) => arr.id !== wines_id);
    this.save(data);
  }

  static rename(id, params) {
    let data = this.getWines();
    let tmp = +id[0];

    let arr = params.split("/");
    let year = +arr[1];
    let date = new Date();
    let created_at = date.toISOString().slice(0, 10);
    let type = "";
    if (arr[2] === "r" || arr[2] === "R") {
      type = "Red";
    } else if (arr[2] === "w" || arr[2] === "W") {
      type = "White";
    } else {
      type = "other";
    }

    data = data.map((element) => {
      if (tmp === element.id) {
        element.name = arr[0];
        element.year = year;
        element.type = type;
        element.createdAt = created_at;
      }
      return element;
    });
    console.log(year);
    this.save(data);
  }

  static findById(id) {
    let data = this.getWines();
    let tmp = +id[0];
    data = data.filter((arr) => arr.id === tmp);

    if (data.length === 0) {
      return false;
    } else {
      return data;
    }
  }

  static group(typeWine) {
    let data = this.getWines();

    data = data.filter(
      (arr) => arr.type.toLowerCase() === typeWine.toLowerCase()
    );

    return data;
  }

  static sortAge(typeSort) {
    let data = this.getWines();
    if (typeSort.toLowerCase() === "asc") {
      data = data.sort((a, b) => a.year - b.year);
      return data;
    } else if (typeSort.toLowerCase() === "desc") {
      data = data.sort((a, b) => b.year - a.year);
      return data;
    } else {
      console.log("input Wrong, use help for more information");
    }
  }
  static save(dataWine) {
    fs.writeFileSync("./wines.json", JSON.stringify(dataWine, null, 3));
  }
}

module.exports = WineModel;
