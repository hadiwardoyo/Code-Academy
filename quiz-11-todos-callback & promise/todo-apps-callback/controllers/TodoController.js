const todo = require("../models/TodoModel");
const view = require("../views/TodoView");

class TodoController {
  static help() {
    view.help();
  }
  static list() {
    todo.getTodos((err, data) => {
      if (err) {
        view.error(err);
      } else {
        view.list(data);
      }
    });
  }
  static add(params) {
    todo.add(params, (err, data) => {
      if (err) {
        view.error(err);
      } else {
        view.message(data);
      }
    });
  }

  static delete(id) {
    todo.delete(id, (err, data) => {
      if (err) {
        view.error(err);
      } else {
        view.message(data);
      }
    });
  }

  static update(params) {
    todo.update(params, (err, data) => {
      if (err) {
        view.error(err);
      } else {
        view.message(data);
      }
    });
  }

  static complete(id) {
    todo.complete(id, (err, data) => {
      if (err) {
        view.error(err);
      } else {
        view.message(data);
      }
    });
  }

  static uncomplete(id) {
    todo.uncomplete(id, (err, data) => {
      if (err) {
        view.error(err);
      } else {
        view.message(data);
      }
    });
  }
}

module.exports = TodoController;
