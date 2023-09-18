const route = require("express").Router();

route.get("/", (req, res) => {
  res.send("Hello World! rahmat");
});

const lectureRoute = require("./lecture");
const studentRoutes = require("./student");

route.use("/lecturers", lectureRoute);
route.use("/students", studentRoutes);

module.exports = route;
