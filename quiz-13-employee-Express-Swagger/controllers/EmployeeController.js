const employee = require("../models/employeeModel");

class EmployeeController {
  static getEmployee(req, res) {
    employee
      .getEmployee()
      .then((result) => {
        res.render("employee.ejs", { employee: result });
      })
      .catch((err) => {
        res.send(err);
      });
  }
  static addPage(req, res) {
    res.render("employeeAdd.ejs");
  }

  static addEmployee(req, res) {
    employee
      .addEmployee(req.body)
      .then((result) => {
        res.redirect("/employee");
      })
      .catch((err) => {
        res.send(err);
      });
  }

  static deleteEmployee(req, res) {
    let id = Number(req.params.id);

    employee
      .delete(id)
      .then((result) => {
        res.redirect("/employee");
      })
      .catch((err) => {
        res.send(err);
      });
  }

  static editPage(req, res) {
    let id = Number(req.params.id);
    employee
      .getId(id)
      .then((result) => {
        res.render("employeeEdit.ejs", { employee: result });
      })
      .catch((err) => {
        res.send(err);
      });

    // res.render("employeeEdit.ejs", { employee: req.body });
  }

  static editEmployee(req, res) {
    let id = Number(req.params.id);
    console.log(id);
    employee
      .editEmployee(id, req.body)
      .then((result) => {
        res.redirect("/employee");
      })
      .catch((err) => {
        req.send(err);
      });
  }

  static getId(req, res) {
    const id = Number(req.params.id);
    employee
      .getId(id)
      .then((result) => {
        res.send(result);
      })
      .catch((err) => {
        res.send(err);
      });
  }
}

module.exports = EmployeeController;
