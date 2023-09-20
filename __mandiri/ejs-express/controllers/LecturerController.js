const lecturer = require("../models/LecturerModel");

class LecturerController {
  static getLecturer(req, res) {
    lecturer
      .getAllLecturer()
      .then((result) => {
        res.send(result);
      })
      .catch((err) => {
        res.send(err);
      });
  }

  static create(req, res) {
    res.send("lecturer create page");
  }

  static information(req, res) {
    const id = Number(req.params.id);
    lecturer
      .information(id)
      .then((result) => {
        res.send(result);
      })
      .catch((err) => {
        res.send(err);
      });
  }
}

module.exports = LecturerController;
