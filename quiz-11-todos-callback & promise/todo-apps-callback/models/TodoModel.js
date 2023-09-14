const fs = require("fs");

class TodoModel {
  constructor(id, task, type, created_at, completed_at) {
    this.id = id;
    this.task = task;
    this.type = type;
    this.created_at = created_at;
    this.completed_at = completed_at || null;
  }
  static getTodos(cb) {
    fs.readFile("./data.json", "utf8", (err, data) => {
      if (err) {
        cb(err, null);
      } else {
        let todos = JSON.parse(data);
        let tmp = todos.map((todo) => {
          let { id, task, type, created_at, completed_at } = todo;
          return new TodoModel(id, task, type, created_at, completed_at);
        });
        // return todos;
        cb(null, tmp);
      }
    });
  }
  static add(params, cb) {
    this.getTodos((err, data) => {
      if (err) {
        cb(err, null);
      } else {
        let create_at = new Date();
        let id = data[data.length - 1].id + 1;

        data.push(new TodoModel(id, params, false, create_at));
        this.save(data);
        cb(null, `${params} has been added`);
      }
    });
  }

  static delete(id) {
    this.getTodos((err, data) => {
      if (err) {
        cb(err, null);
      } else {
        let tmp = +id[0];
        if (id === undefined) {
          console.log("ID not found");
        } else {
          data = data.filter((todo) => id != todo.id);
        }
        this.save(data);
        cb(null, "id: ${id} , successfully deleted");
      }
    });
  }

  static update(params, cb) {
    let idNew = +params[0];
    let task = params[1];
    let create_at = new Date();

    this.getTodos((err, data) => {
      if (err) {
        cb(err, null);
      } else {
        data = data.map((todo) => {
          if (todo.id === idNew) {
            todo.task = task;
            todo.created_at = create_at;
          }
          return todo;
        });
        this.save(data);
        cb(null, ` new task: "${task}" has been updated`);
      }
    });
  }

  static complete(id, cb) {
    let tmp = +id[0];
    let completed_at = new Date();
    this.getTodos((err, data) => {
      if (err) {
        cb(err, null);
      } else {
        data = data.map((todo) => {
          if (todo.id === tmp) {
            todo.type = true;
            todo.completed_at = completed_at;
          }
          return todo;
        });
        this.save(data);
        cb(null, `data has been changed to completed at: ${completed_at}`);
      }
    });
  }

  static uncomplete(id, cb) {
    let tmp = +id[0];
    this.getTodos((err, data) => {
      if (err) {
        cb(err, null);
      } else {
        data = data.map((todo) => {
          if (todo.id === tmp) {
            todo.type = false;
            todo.completed_at = null;
          }
          return todo;
        });
        this.save(data);
        cb(null, `id: ${tmp} has been changed to uncompleted`);
      }
    });
  }

  static save(data) {
    fs.writeFileSync("./data.json", JSON.stringify(data, null, 3));
  }
}

module.exports = TodoModel;
