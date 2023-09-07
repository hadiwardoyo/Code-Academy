const wine = require("../models/WineModel");
const view = require("../views/WineView");

class WineController {
  static help() {
    view.help();
  }

  static wines() {
    let data = wine.getWines();
    view.list(data);
  }
  static add(wines) {
    view.statusAdd(wine.add(wines));
  }

  static sell(id) {
    wine.sell(id);
    view.statusSell(true);
  }

  static rename(id, wines) {
    wine.rename(id, wines);
  }

  static findById(id) {
    view.statusFind(wine.findById(id));
  }

  static group(type) {
    let tmp = wine.group(type);
    view.list(tmp);
  }
  static sortAge(type) {
    let tmp = wine.sortAge(type);
    view.list(tmp);
  }
}

module.exports = WineController;
