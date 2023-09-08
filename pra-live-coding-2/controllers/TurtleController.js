const view = require("../views/TurtleView");
const {
  snappingTurtle,
  tortoise,
  terrapins,
} = require("../models/TurtleModel");

class TurtleController {
  static message(msg) {
    view.message(msg);
  }

  static help() {
    view.help();
  }
}

module.exports = TurtleController;
