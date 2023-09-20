const employer = require("../models/employerModel");

class EmployerController {
  static getEmployer(req, res) {
    employer
      .getEmployer()
      .then((result) => {
        res.render("employer.ejs", { employer: result });
      })
      .catch((err) => {
        res.send(err);
      });
  }
  static addPage(req, res) {
    res.render("employerAdd.ejs");
  }

  static addEmployer(req, res) {
    employer
      .addEmployer(req.body)
      .then((result) => {
        res.redirect("/employer");
      })
      .catch((err) => {
        res.send(err);
      });
  }

  static deleteEmployer(req, res) {
    let id = Number(req.params.id);

    employer
      .delete(id)
      .then((result) => {
        res.redirect("/employer");
      })
      .catch((err) => {
        res.send(err);
      });
  }

  static editPage(req, res) {
    let id = Number(req.params.id);
    employer
      .getId(id)
      .then((result) => {
        res.render("employerEdit.ejs", { employer: result });
      })
      .catch((err) => {
        res.send(err);
      });
  }

  static editEmployer(req, res) {
    let id = Number(req.params.id);
    employer
      .editEmployer(id, req.body)
      .then((result) => {
        res.redirect("/employer");
      })
      .catch((err) => {
        res.send(err);
      });
  }

  static getId(req, res) {
    const id = Number(req.params.id);
    employer
      .getId(id)
      .then((result) => {
        res.send(result);
      })
      .catch((err) => {
        res.send(err);
      });
  }
}

module.exports = EmployerController;
