const todo = require("../models/TodoModel");
const view = require("../views/TodoView");

class TodoController {
  static help() {
    view.help();
  }
  static list() {
    todo
      .getTodos()
      .then((todos) => {
        view.list(todos);
      })
      .catch((err) => {
        view.error(err);
      });
  }
  static add(params) {
    todo
      .add(params)
      .then((todo) => {
        view.message(todo);
      })
      .catch((err) => {
        view.error(err);
      });
  }

  static delete(id) {
    todo
      .delete(id)
      .then((todo) => {
        view.message(todo);
      })
      .catch((err) => {
        view.error(err);
      });
  }

  static update(params) {
    todo
      .update(params)
      .then((todo) => {
        view.message(todo);
      })
      .catch((err) => {
        view.error(err);
      });
  }

  static complete(id) {
    todo
      .complete(id)
      .then((todo) => {
        view.message(todo);
      })
      .catch((err) => {
        view.error(err);
      });
  }

  static uncomplete(id) {
    todo
      .uncomplete(id)
      .then((todo) => {
        view.message(todo);
      })
      .catch((err) => {
        view.error(err);
      });
  }
}

module.exports = TodoController;
