const route = require("express").Router();

route.get("/", (req, res) => {
  res.render("index.ejs");
});

const employeeRoute = require("./employee");
const jobRoute = require("./job");
const employerRoute = require("./employer");

route.use("/employee", employeeRoute);
route.use("/job", jobRoute);
route.use("/employer", employerRoute);

module.exports = route;
