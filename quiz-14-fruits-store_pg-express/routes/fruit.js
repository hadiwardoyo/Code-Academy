const fruitRoute = require("express").Router();
const { FruitController } = require("../controllers");

fruitRoute.get("/", FruitController.getFruit);

fruitRoute.get("/add", FruitController.addPage);
fruitRoute.post("/add", FruitController.add);

fruitRoute.get("/delete/:id", FruitController.delete);

fruitRoute.get("/update/:id", FruitController.updatePage);
fruitRoute.post("/update/:id", FruitController.update);
module.exports = fruitRoute;
