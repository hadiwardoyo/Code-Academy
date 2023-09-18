class LecturerController {
  static getLecturer(req, res) {
    res.send("lecturer page");
  }

  static create(req, res) {
    res.send("lecturer create page");
  }

  static information(req, res) {
    const id = Number(req.params.id);
    if (typeof id === "number" && isNaN(id) === false) {
      res.send(`Information lecturer page id number : ${id}`);
    } else {
      res.send("ID lecturer must be number");
    }
  }
}

module.exports = LecturerController;
