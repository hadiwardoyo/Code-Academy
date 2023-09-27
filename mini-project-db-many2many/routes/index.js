const route = require("express").Router();

route.get("/", (req, res) => {
  res.json({
    message: "Hello World! this is program fruit store",
  });
  //   res.render("index.ejs");
});

// const jurusanRoutes = require("./jurusan");
// const matkulRoutes = require("./mataKuliah");
// const matprakRoutes = require("./mataPraktikum");
// const praktikanRoutes = require("./praktikan");

// route.use("/jurusan", jurusanRoutes);
// route.use("/mataKuliah", matkulRoutes);
// route.use("/mataPraktikum", matprakRoutes);
// route.use("/praktikan", praktikanRoutes);

module.exports = route;
