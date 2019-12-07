require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const errorHandler = require("./handlers/error");
const authRoutes = require("./routes/auth");

const PORT = 3500;

app.use(cors());
app.use(bodyParser.json());

app.use("/api/auth", authRoutes)

// All routes and errors here for now
app.use(function (req, res, next) {
  let err = new Error("Page not Found!");
  err.status = 404;
  next(err);
});

app.use(errorHandler);

app.listen(PORT, function () {
  console.log(`Server is running on port ${PORT} i hope.`);
});