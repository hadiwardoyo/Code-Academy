const { student } = require("../models");

class StudentController {
  static getStudent(req, res) {
    student
      .findAll()
      .then((students) => {
        res.json(students);
      })
      .catch((err) => {
        res.json(err);
      });
  }
  static createPage(req, res) {}
  static create(req, res) {
    const { name, major, semester, city, image } = req.body;
    student
      .create({
        name,
        major,
        semester,
        city,
        image,
      })
      .then((result) => {
        res.json(result);
      })
      .catch((err) => {
        res.json(err);
      });
  }
  static delete(req, res) {
    const id = +req.params.id;
    student
      .destroy({ where: { id } })
      .then((result) => {
        if (result === 1) {
          res.json({ message: `Student ${id} has been deleted` });
        } else {
          res.json({ message: `id Not Found` });
        }
      })
      .catch((err) => {
        res.json(err);
      });
  }
  static updatePage(req, res) {}
  static update(req, res) {
    const id = +req.params.id;
    const { name, major, semester, city } = req.body;
    student
      .update({ name, major, semester, city }, { where: { id } })
      .then((result) => {
        result[0] === 0
          ? res.json({ message: `Student ${id} has been updated` })
          : res.json({ message: `id Not Found` });
      })
      .catch((error) => {
        res.json(error);
      });
  }
  static getInformation(req, res) {
    const id = +req.params.id;
    student
      .findByPk(id)
      .then((student) => {
        res.json(student);
      })
      .catch((error) => {
        res.json(error);
      });
  }
  static search(req, res) {}
}

module.exports = StudentController;
