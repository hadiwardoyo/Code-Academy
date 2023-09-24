const { Router } = require("express");
const categoryRoute = Router();
const { CategoryController } = require("../controllers");

categoryRoute.get("/", CategoryController.getCategory);

categoryRoute.get("/add", CategoryController.addPage);
categoryRoute.post("/add", CategoryController.add);

categoryRoute.get("/delete/:id", CategoryController.delete);

categoryRoute.get("/update/:id", CategoryController.updatePage);
categoryRoute.post("/update/:id", CategoryController.update);

module.exports = categoryRoute;
