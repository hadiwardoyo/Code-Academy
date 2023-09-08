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
    console.log("index add <box_name> <...turtles>");
    console.log("index sell <box_name> <turtle.id");
    console.log("index countPrice <box_name>");
    console.log("index detail <box_name>");
    console.log("index filter <species>");
    console.log("==========================\n");
  }
}

module.exports = TurtleView;
