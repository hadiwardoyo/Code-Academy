const command = process.argv[2];
const params = process.argv.slice(3);

const farm = require("./controllers/FarmController");

switch (command) {
  case "help":
    farm.help(); //aman
    break;

  case "show": //aman
    farm.show();
    break;

  case "create": //aman
    farm.createFarm(params);
    break;

  case "details": //aman
    farm.details(params);
    break;

  case "add": //aman
    farm.addLivestock(params);
    break;

  case "sell":
    break;

  case "totalProduce":
    break;

  case "sort":
    break;

  case undefined:
    farm.help();
    break;

  default:
    farm.message(" Command not found, use help for more information");
}
