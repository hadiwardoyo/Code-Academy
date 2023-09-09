const view = require("../views/TurtleView");
const {
  SnappingTurtle,
  Tortoise,
  Terrapins,
  TurtleBox,
} = require("../models/TurtleModel");

class TurtleController {
  static message(msg) {
    view.message(msg);
  }

  static help() {
    view.help();
  }

  static show() {
    let data = TurtleBox.getBoxes();
    view.showBox(data);
  }

  static createBox(nameBox) {
    let msg = TurtleBox.createBox(nameBox);
    view.message(msg);
  }

  static add(params) {
    let msg = TurtleBox.addTurtle(params);
    view.message(msg);
  }

  static sellTurtle(params) {
    let msg = TurtleBox.sellTurtle(params);
    view.message(msg);
  }

  static countPrice(params) {
    let msg = TurtleBox.countPrice(params);
    view.totalPrice(msg, params[0]);
  }

  static detailBox(box_name) {
    let msg = TurtleBox.detailBox(box_name);
    view.showBoxDetail(msg, box_name);
  }

  static filter(species) {
    let msg = TurtleBox.filter(species);
    view.filter(msg, species);
  }
}

module.exports = TurtleController;
