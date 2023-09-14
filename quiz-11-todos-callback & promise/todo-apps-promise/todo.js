const command = process.argv[2];
const id = process.argv[3];
// const params = process.argv[4];
const params = process.argv.slice(3);

const TodoController = require("./controllers/TodoController");

switch (command) {
  case "help":
    TodoController.help();
    break;
  case "list":
    TodoController.list();
    break;
  case "add":
    TodoController.add(id);
    break;
  case "delete":
    TodoController.delete(id);
    break;
  case "update":
    TodoController.update(params);
    break;
  case "complete":
    TodoController.complete(id);
    break;
  case "uncomplete":
    TodoController.uncomplete(id);
    break;
  case undefined:
    console.log("command can not be empty");
    TodoController.help();
    break;
  default:
    console.log("command not supported, use help for more information");
}

// console.log(command, id);
