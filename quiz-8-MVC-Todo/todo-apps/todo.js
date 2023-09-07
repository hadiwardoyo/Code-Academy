const command = process.argv[2];
const id = process.argv[3];
const params = process.argv[4];
const TodoController = require("./controllers/TodoController");

switch (command) {
  case "help":
    TodoController.help(); //done
    break;
  case "list":
    TodoController.list(); //done
    break;
  case "add":
    TodoController.add(id); //done
    break;
  case "delete":
    TodoController.delete(id); //done
    break;
  case "update":
    TodoController.update(id, params); //done
    break;
  case "complete":
    TodoController.complete(id);
    break;
  case "uncomplete":
    TodoController.uncomplete(id);
    break;
  case undefined:
    console.log("command can not be empty");
    break;
  default:
    console.log("command not supported, use help for more information");
}

// console.log(command, id);
