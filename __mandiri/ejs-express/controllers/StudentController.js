const student = require("../models/StudentModel");

class StudentController {
  static getStudent(req, res) {
    student
      .getAllStudent()
      .then((result) => {
        // res.send(result);
        res.render("student.ejs", { student: result });
      })
      .catch((err) => {
        res.send(err);
      });
  }

  static createPage(req, res) {
    res.render("studentAdd.ejs");
  }

  static create(req, res) {
    // console.log(req.body);
    student
      .create(req.body)
      .then((result) => {
        res.redirect("/students");
      })
      .catch((err) => {
        res.send(err);
      });
  }

  static delete(req, res) {
    let id = Number(req.params.id);
    student
      .delete(id)
      .then((result) => {
        res.send(result);
      })
      .catch((err) => {
        res.send(err);
      });
  }

  static update(req, res) {
    const id = Number(req.params.id);
    // console.log(id);
    student
      .update(id, req.body)
      .then((result) => {
        res.send(result);
      })
      .catch((err) => {
        res.send(err);
      });
  }

  static information(req, res) {
    const id = Number(req.params.id);
    student
      .information(id)
      .then((result) => {
        res.send(result);
      })
      .catch((err) => {
        res.send(err);
      });
  }
  static search(req, res) {
    student
      .search(req.query)
      .then((result) => {
        res.send(result);
      })
      .catch((err) => {
        res.send(err);
      });
  }
}

module.exports = StudentController;
