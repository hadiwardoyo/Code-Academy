const praktikanRoute = require("express").Router();
const { PraktikanController } = require("../controllers");

praktikanRoute.get("/data", PraktikanController.getPraktikan);
praktikanRoute.get("/", PraktikanController.view);

praktikanRoute.get("/add", PraktikanController.addPage);
praktikanRoute.post("/add", PraktikanController.add);

praktikanRoute.get("/delete/:id", PraktikanController.delete);

praktikanRoute.get("/update/:id", PraktikanController.updatePage);
praktikanRoute.post("/update/:id", PraktikanController.update);

praktikanRoute.get("/:id/matkul", PraktikanController.viewMatkul);

module.exports = praktikanRoute;
