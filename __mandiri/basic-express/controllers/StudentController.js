class StudentController {
  static getStudent(req, res) {
    res.send("Student page");
  }

  static create(req, res) {
    res.send("Student create page");
  }

  static information(req, res) {
    const id = Number(req.params.id);
    if (typeof id === "number" && isNaN(id) === false) {
      res.send(`Information Student page id number : ${id}`);
    } else {
      res.send("ID Student must be number");
    }
  }
}

module.exports = StudentController;
