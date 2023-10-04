const matkulRoute = require("express").Router();
const { MataKuliahController } = require("../controllers");

matkulRoute.get("/data", MataKuliahController.getMatkul);
matkulRoute.get("/", MataKuliahController.view);

matkulRoute.get("/add", MataKuliahController.addPage);
matkulRoute.post("/add", MataKuliahController.add);

matkulRoute.get("/delete/:id", MataKuliahController.delete);

matkulRoute.get("/update/:id", MataKuliahController.updatePage);
matkulRoute.post("/update/:id", MataKuliahController.update);
module.exports = matkulRoute;
