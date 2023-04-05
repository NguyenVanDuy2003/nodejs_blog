// import { engine } from "express-handlebars";
// import express from "express";
// import { path } from "path";

const express = require("express");
const path = require("path");
const handlebars = require("express-handlebars");
const morgan = require("morgan");
const app = express();
const port = 3000;
handlebars.create({ defaultLayout: 'main' });
// http logger
app.use(morgan("combined"));

// template engine
app.engine("handlebars", handlebarsengine());
app.set("view engine", "handlebars");
app.set("views", path.join(__dirname, "views"));
// expreess
app.get("/", (req, res) => {
  res.render("home");
});

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
