const command = process.argv[2];
const params = process.argv.slice(3);

const Controller = require("./controllers/Controller");

let status = Controller.getStatus();

if (status.length > 0 && status[0].role === "admin") {
  // Login "admin" mode
  switch (command) {
    case "help":
      Controller.help(status);
      break;
    case "show":
      Controller.show(status);
      break;
    case "add":
      Controller.add(params);
      break;
    case "changePwd":
      Controller.changePwd(status, params);
      break;
    case "delete":
      Controller.deleteUser(params);
      break;
    case "update":
      Controller.update(params);
      break;
    case "logout":
      Controller.logout(status);
      break;
    case undefined:
      Controller.help(status);
      break;
    default:
      Controller.message("Input Salah");
      Controller.help(status);
      break;
  }
} else if (status.length === 0) {
  // command guest mode
  switch (command) {
    case "help":
      console.log("\n-- guest Mode--");
      Controller.help(status);
      break;
    case "login":
      Controller.login(params);
      break;
    case undefined:
      Controller.help(status);
      break;
    default:
      Controller.message("Input Salah");
      Controller.help(status);
      break;
  }
} else {
  switch (command) {
    //   Login "other" mode
    case "help":
      Controller.help(status);
      break;
    case "artwork":
      Controller.show(status);
      break;
    case "create":
      Controller.create(status, params);
      break;
    case "changePwd":
      Controller.changePwd(status, params);

      break;
    case "remove":
      Controller.deleteArt(status, params);
      break;
    case "edit":
      Controller.edit(status, params);
      break;
    case "logout":
      Controller.logout(status);
      break;
    case undefined:
      Controller.help(status);
      break;
    default:
      Controller.message("Input Salah");
      Controller.help(status);
      break;
  }
}
//   guest mode
