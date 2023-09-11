const command = process.argv[2];
const params = process.argv.slice(3);

const farm = require("./controllers/FarmController");

switch (command) {
  case "help":
    farm.help();
    break;

  case "show":
    farm.show();
    break;

  case "create":
    farm.createFarm(params);
    break;

  case "details":
    farm.details(params);
    break;

  case "add":
    farm.addLivestock(params);
    break;

  case "sell":
    farm.sell(params);
    break;

  case "totalProduce":
    farm.totalProduce(params);
    break;

  case "sort":
    farm.sort(params);
    break;

  case undefined:
    farm.help();
    break;

  default:
    farm.message(" Command not found, use help for more information");
}
