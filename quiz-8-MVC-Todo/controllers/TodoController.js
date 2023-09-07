const todo = require("../models/TodoModel");
const view = require("../views/TodoView");

class TodoController {
  static help() {
    view.help();
  }
  static list() {
    let data = todo.getTodos();
    view.list(data);
  }
  static add(params) {
    todo.add(params);
  }

  static delete(id) {
    todo.delete(id);
  }

  static update(id, params) {
    todo.update(id, params);
  }

  static complete(id) {
    todo.complete(id);
  }

  static uncomplete(id) {
    todo.uncomplete(id);
  }
}

module.exports = TodoController;
