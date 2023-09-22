const route = require("express").Router();

route.get("/", (req, res) => {
  //biasakan gunakan res.JSON()
  res.json({
    message: "Hello World! rahmat",
  });

  // res.send({
  //   message: "Hello World! rahmat",
  // });
  // res.render("index.ejs");
});

// const lectureRoute = require("./lecture");
const studentRoutes = require("./student");

// route.use("/lecturers", lectureRoute);
route.use("/students", studentRoutes);

module.exports = route;
