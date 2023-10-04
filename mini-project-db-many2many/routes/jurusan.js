const jurusanRoute = require("express").Router();
const { JurusanController } = require("../controllers");

jurusanRoute.get("/data", JurusanController.getJurusan);
jurusanRoute.get("/", JurusanController.view);

jurusanRoute.get("/add", JurusanController.addPage);
jurusanRoute.post("/add", JurusanController.add);

jurusanRoute.get("/delete/:id", JurusanController.delete);

jurusanRoute.get("/update/:id", JurusanController.updatePage);
jurusanRoute.post("/update/:id", JurusanController.update);
module.exports = jurusanRoute;
