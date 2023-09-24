const route = require("express").Router();

route.get("/", (req, res) => {
  // res.json({
  //   message: "Hello World! this is program fruit store",
  // });
  res.render("index.ejs");
});

const fruitRoute = require("./fruit");
const categoryRoutes = require("./category");
const brandRoutes = require("./brand");

route.use("/fruits", fruitRoute);
route.use("/categories", categoryRoutes);
route.use("/brands", brandRoutes);

module.exports = route;
