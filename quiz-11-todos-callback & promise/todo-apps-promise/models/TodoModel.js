const fs = require("fs");

class TodoModel {
  constructor(id, task, type, created_at, completed_at) {
    this.id = id;
    this.task = task;
    this.type = type;
    this.created_at = created_at;
    this.completed_at = completed_at || null;
  }
  static getTodos() {
    return new Promise((resolve, reject) => {
      fs.readFile("./data.json", "utf8", (err, data) => {
        if (err) {
          reject(err);
        } else {
          let todos = JSON.parse(data);
          let tmp = todos.map((todo) => {
            let { id, task, type, created_at, completed_at } = todo;
            return new TodoModel(id, task, type, created_at, completed_at);
          });
          resolve(tmp);
        }
      });
    });
  }
  static add(params) {
    let create_at = new Date();
    return new Promise((resolve, reject) => {
      this.getTodos()
        .then((todos) => {
          let id = todos[todos.length - 1].id + 1;
          todos.push(new TodoModel(id, params, false, create_at));
          this.save(todos);
          resolve(`${params[0]} has been added`);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

  static delete(id) {
    return new Promise((resolve, reject) => {
      this.getTodos()
        .then((todos) => {
          let tmp = +id[0];
          if (id === undefined) {
            console.log("ID not found");
          } else {
            todos = todos.filter((todo) => id != todo.id);
          }
          this.save(todos);
          resolve(`id: ${id} , successfully deleted`);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

  static update(params, cb) {
    let idNew = +params[0];
    let task = params[1];
    let create_at = new Date();

    return new Promise((resolve, reject) => {
      this.getTodos()
        .then((data) => {
          data = data.map((todo) => {
            if (todo.id === idNew) {
              todo.task = task;
              todo.created_at = create_at;
            }
            return todo;
          });
          this.save(data);
          resolve(`new task: "${task}" has been updated`);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

  static complete(id, cb) {
    let tmp = +id[0];
    let completed_at = new Date();

    return new Promise((resolve, reject) => {
      this.getTodos()
        .then((data) => {
          data = data.map((todo) => {
            if (todo.id === tmp) {
              todo.type = true;
              todo.completed_at = completed_at;
            }
            return todo;
          });
          this.save(data);
          resolve(`data has been changed to completed at: ${completed_at}`);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

  static uncomplete(id, cb) {
    let tmp = +id[0];

    return new Promise((resolve, reject) => {
      this.getTodos()
        .then((data) => {
          data = data.map((todo) => {
            if (todo.id === tmp) {
              todo.type = false;
              todo.completed_at = null;
            }
            return todo;
          });
          this.save(data);
          cb(null, `id: ${tmp} has been changed to uncompleted`);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

  static save(data) {
    fs.writeFileSync("./data.json", JSON.stringify(data, null, 3));
  }
}

module.exports = TodoModel;
