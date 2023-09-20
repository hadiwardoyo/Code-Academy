const job = require("../models/jobModel");

class JobController {
  static getJob(req, res) {
    job
      .getJob()
      .then((result) => {
        res.render("job.ejs", { job: result });
      })
      .catch((err) => {
        res.send(err);
      });
  }
  static addPage(req, res) {
    res.render("jobAdd.ejs");
  }

  static addJob(req, res) {
    job
      .addJob(req.body)
      .then((result) => {
        res.redirect("/job");
      })
      .catch((err) => {
        res.send(err);
      });
  }

  static deleteJob(req, res) {
    let id = Number(req.params.id);

    job
      .delete(id)
      .then((result) => {
        res.redirect("/job");
      })
      .catch((err) => {
        res.send(err);
      });
  }

  static editPage(req, res) {
    let id = Number(req.params.id);
    job
      .getId(id)
      .then((result) => {
        res.render("jobEdit.ejs", { job: result });
      })
      .catch((err) => {
        res.send(err);
      });

    // res.render("jobEdit.ejs", { job: req.body });
  }

  static editJob(req, res) {
    let id = Number(req.params.id);
    job
      .editJob(id, req.body)
      .then((result) => {
        res.redirect("/job");
      })
      .catch((err) => {
        res.send(err);
      });
  }

  static getId(req, res) {
    const id = Number(req.params.id);
    job
      .getId(id)
      .then((result) => {
        res.send(result);
      })
      .catch((err) => {
        res.send(err);
      });
  }
}

module.exports = JobController;
