const command = process.argv[2];
const wineId = process.argv[3];
const params = process.argv[4];

const wine = require("./controllers/WineController");

switch (command) {
  case "help":
    wine.help(); //done
    break;
  case "wines":
    wine.wines(); //done
    break;
  case "add":
    wine.add(wineId); //tetap menggunakan index id //done
    break;
  case "sell":
    wine.sell(wineId); //done
    break;
  case "rename":
    wine.rename(wineId, params); //done
    break;
  case "findById":
    wine.findById(wineId); //done
    break;
  case "group":
    wine.group(wineId); //input berupa type //done
    break;
  case "age":
    wine.sortAge(wineId); //input berupa asc / desc //done
    break;
  case undefined:
    console.log("command can not be empty");
    break;
  default:
    console.log("Command not found, use help for more information");
}
