const { constants } = require("buffer");

class TodoView {
  static help() {
    console.log("\ntodo help");
    console.log("todo list");
    console.log("todo add <task>");
    console.log("todo update <id> <task>");
    console.log("todo delete <id>");
    console.log("todo complete <id>");
    console.log("todo incomplete <id>\n");
  }
  static list(todos) {
    console.log("\nTodo list Today and every day ");
    todos = todos.map((todo) => {
      const { id, task, type, created_at, completed_at } = todo;
      console.log(`${id}. [${type ? "X" : " "}] ${task}`);
    });
    console.log("\n===============================");
  }
}

module.exports = TodoView;
