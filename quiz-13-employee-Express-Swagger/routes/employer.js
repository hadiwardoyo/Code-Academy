const employerRoute = require("express").Router();
const EmployerController = require("../controllers/EmployerController");

employerRoute.get("/", EmployerController.getEmployer);
employerRoute.get("/create", EmployerController.addPage);
employerRoute.post("/create", EmployerController.addEmployer);

employerRoute.get("/delete/:id", EmployerController.deleteEmployer);

employerRoute.get("/information/:id", EmployerController.getId);

employerRoute.get("/update/:id", EmployerController.editPage);
employerRoute.post("/update/:id", EmployerController.editEmployer);

module.exports = employerRoute;
