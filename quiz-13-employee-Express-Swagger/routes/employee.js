const employeeRoute = require("express").Router();
const EmployeeController = require("../controllers/EmployeeController");

employeeRoute.get("/", EmployeeController.getEmployee);
employeeRoute.get("/create", EmployeeController.addPage);
employeeRoute.post("/create", EmployeeController.addEmployee);

employeeRoute.get("/delete/:id", EmployeeController.deleteEmployee);

employeeRoute.get("/information/:id", EmployeeController.getId);

employeeRoute.get("/update/:id", EmployeeController.editPage);
employeeRoute.post("/update/:id", EmployeeController.editEmployee);

module.exports = employeeRoute;
