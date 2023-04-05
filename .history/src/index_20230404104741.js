import { engine } from "express-handlebars";
import express from "express";
import { path } from "path";
const express = require("express");
const express = require("express");
const express = require("express");



const morgan = require("morgan");
const app = express();
const port = 3000;

// template engine
app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", path.join(__dirname, "resort/views"));
console.log(path.join(__dirname, "views"));
// http logger
app.use(morgan("combined"));
// expreess
app.get("/", (req, res) => {
  res.render("home");
});

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
