// import { handlebars } from "express-handlebars";
// import Express from "express";
// import { path } from "path";

const express = require("express");
const path = require("path");
const handlebars = require("express-handlebars");
const morgan = require("morgan");
const app = express();
const port = 3000;

// http logger
app.use(morgan("combined"));

// template engine
app.engine("handlebars", handlebars.engine());
app.set("view engine", "handlebars");
app.set("views", path.join(__dirname, "views"));
console.log(path.join(resolve, "views"));
// expreess
app.get("/", (req, res) => {
  res.render("home");
});

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
