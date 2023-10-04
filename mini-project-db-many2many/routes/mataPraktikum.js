const matprakRoute = require("express").Router();
const { MataPraktikumController } = require("../controllers");

matprakRoute.get("/data", MataPraktikumController.getMatprak);
matprakRoute.get("/", MataPraktikumController.view);

matprakRoute.get("/add/:id", MataPraktikumController.addPage);
matprakRoute.post("/add", MataPraktikumController.add);

matprakRoute.get(
  "/delete/:idMatkul/:idPraktikan",
  MataPraktikumController.delete
);

matprakRoute.get("/update/:id", MataPraktikumController.updatePage);
matprakRoute.post("/update/:id", MataPraktikumController.update);
module.exports = matprakRoute;
