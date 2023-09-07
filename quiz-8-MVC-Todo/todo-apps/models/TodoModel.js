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
    let todos = JSON.parse(fs.readFileSync("./data.json", "utf8"));
    todos = todos.map((todo) => {
      let { id, task, type, created_at, completed_at } = todo;
      return new TodoModel(id, task, type, created_at, completed_at);
    });
    return todos;
  }
  static add(params) {
    let data = this.getTodos();
    // const [task] = params;
    let create_at = new Date();
    let id = data[data.length - 1].id + 1;

    data.push(new TodoModel(id, params, false, create_at));
    this.save(data);
    console.log(`${params} has been added`);
  }

  static delete(id) {
    let data = this.getTodos();
    let tmp = +id[0];
    if (id === undefined) {
      console.log("ID not found");
    } else {
      data = data.filter((todo) => id != todo.id);
    }

    this.save(data);
  }

  static update(id, params) {
    let data = this.getTodos();
    let tmp = +id[0];
    let task = params;
    let create_at = new Date();

    data = data.map((todo) => {
      if (todo.id === tmp) {
        todo.task = task;
        todo.created_at = create_at;
      }
      return todo;
    });
    this.save(data);
    console.log("Data Has Been Updated");
  }

  static complete(id) {
    let data = this.getTodos();
    let tmp = +id[0];
    let completed_at = new Date();
    data = data.map((todo) => {
      if (todo.id === tmp) {
        todo.type = true;
        todo.completed_at = completed_at;
      }
      return todo;
    });
    this.save(data);
    console.log(data);
  }

  static uncomplete(id) {
    let data = this.getTodos();
    let tmp = +id[0];
    let completed_at = new Date();
    data = data.map((todo) => {
      if (todo.id === tmp) {
        todo.type = false;
        todo.completed_at = null;
      }
      return todo;
    });
    this.save(data);
    console.log(data);
  }

  static save(data) {
    fs.writeFileSync("./data.json", JSON.stringify(data, null, 3));
  }
}

module.exports = TodoModel;
