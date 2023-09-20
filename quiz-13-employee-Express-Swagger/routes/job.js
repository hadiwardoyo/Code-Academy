const jobRoute = require("express").Router();
const JobController = require("../controllers/JobController");

jobRoute.get("/", JobController.getJob);
jobRoute.get("/create", JobController.addPage);
jobRoute.post("/create", JobController.addJob);

jobRoute.get("/delete/:id", JobController.deleteJob);

jobRoute.get("/information/:id", JobController.getId);

jobRoute.get("/update/:id", JobController.editPage);
jobRoute.post("/update/:id", JobController.editJob);

module.exports = jobRoute;
