const lectureRoute = require("express").Router();
const { LecturerController } = require("../controllers");

lectureRoute.get("/", LecturerController.getLecturer);

lectureRoute.get("/create", LecturerController.create);
lectureRoute.get("/information/:id", LecturerController.information);

module.exports = lectureRoute;
