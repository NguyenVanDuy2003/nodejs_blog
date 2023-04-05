// import { engine } from "express-handlebars";
// import express from "express";
// import { path } from "path";
const express = require("express");
const path = require("path");
const handlebars = require("express-handlebars");

const morgan = require("morgan");
const app = express();
const port = 3000;

// template engine
app.engine("handlebars", handlebars());
app.set("view engine", "handlebars");
app.set("views", path.join(__dirname, "resort/views"));
console.log(path.join(__dirname, "views"));
// http logger
app.use(morgan("combined"));
// expreess
app.get("/", (req, res) => {
  res.render("ss");
});

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
