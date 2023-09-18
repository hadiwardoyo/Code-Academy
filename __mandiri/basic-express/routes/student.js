const studentRoute = require("express").Router();
const StudentController = require("../controllers/StudentController");

studentRoute.get("/", StudentController.getStudent);

studentRoute.get("/create", StudentController.create);
studentRoute.get("/information/:id", StudentController.information);

module.exports = studentRoute;
