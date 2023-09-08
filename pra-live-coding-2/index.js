const command = process.argv[2];
const params = process.argv.slice(3);

const turtle = require("./controllers/TurtleController");

switch (command) {
  case "help":
    turtle.help();
    break;
  case "show":
    turtle.show();
    break;
  case "createBox":
    turtle.createBox(params);
    break;
  case "add":
    turtle.add(params);
    break;
  case "sell":
    turtle.sell(params);
    break;
  case "countPrice":
    turtle.countPrice(params);
    break;
  case "detail":
    turtle.detail(params);
    break;
  case "filter":
    turtle.filter(params);
    break;
  case undefined:
    turtle.help();
    break;
  default:
    turtle.message("Command not found, use help for more information");
    break;
}

// console.log(params[1]);
