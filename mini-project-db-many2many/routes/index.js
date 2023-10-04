const route = require("express").Router();

route.get("/", (req, res) => {
  res.render("index.ejs");
});

const jurusanRoutes = require("./jurusan");
const matkulRoutes = require("./mataKuliah");
const matprakRoutes = require("./mataPraktikum");
const praktikanRoutes = require("./praktikan");

route.use("/jurusan", jurusanRoutes);
route.use("/mataKuliah", matkulRoutes);
route.use("/mataPraktikum", matprakRoutes);
route.use("/praktikan", praktikanRoutes);

module.exports = route;
