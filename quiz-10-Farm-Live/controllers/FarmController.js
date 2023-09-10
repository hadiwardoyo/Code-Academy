const view = require("../views/FarmView");
const {
  LiveStocks,
  Chicken,
  Cow,
  Sheep,
  Farm,
} = require("../models/FarmModel");

class FarmController {
  static message(msg) {
    view.message(msg);
  }

  static help() {
    view.help();
  }
  static show() {
    let data = Farm.getFarm();
    view.show(data);
  }
  static createFarm(farmName) {
    let msg = Farm.createFarm(farmName);
    view.message(msg);
  }
  static details(farmName) {
    let data = Farm.details(farmName);
    view.details(data, farmName);
  }
  static addLivestock(params) {
    let data = Farm.addLivestock(params);
    view.message(data);
  }
}

module.exports = FarmController;
