const studentRoute = require("express").Router();
const StudentController = require("../controllers/StudentController");

studentRoute.get("/", StudentController.getStudent);
studentRoute.get("/create", StudentController.createPage);
studentRoute.post("/create", StudentController.create);

studentRoute.get("/information/:id", StudentController.information);
studentRoute.get("/delete/:id", StudentController.delete);
studentRoute.post("/update/:id", StudentController.update);

studentRoute.get("/search", StudentController.search);

module.exports = studentRoute;
