const command = process.argv[2];
const params = process.argv.slice(3);

const turtle = require("./controllers/TurtleController");

switch (command) {
  case "help":
    turtle.help(); //aman
    break;
  case "show":
    turtle.show(); // aman
    break;
  case "createBox":
    turtle.createBox(params); //aman
    break;
  case "add":
    turtle.add(params); //aman
    break;
  case "sell":
    turtle.sellTurtle(params); //aman
    break;
  case "countPrice":
    turtle.countPrice(params); //aman
    break;
  case "detail":
    turtle.detailBox(params); //aman
    break;
  case "filter":
    turtle.filter(params); //aman
    break;
  case undefined:
    turtle.help(); //aman
    break;
  default:
    turtle.message("Command not found, use help for more information");
    break;
}
