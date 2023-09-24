const brandRoute = require("express").Router();
const { BrandController } = require("../controllers");

brandRoute.get("/", BrandController.getBrand);

brandRoute.get("/add", BrandController.addPage);
brandRoute.post("/add", BrandController.add);

brandRoute.get("/delete/:id", BrandController.delete);

brandRoute.get("/update/:id", BrandController.updatePage);
brandRoute.post("/update/:id", BrandController.update);

module.exports = brandRoute;
