// import { engine } from "express-handlebars";
// import express from "express";
// import { path } from "path";
import { create } from 'express-handlebars';

const express = require("express");
const path = require("path");
const engine = require("express-handlebars");

const morgan = require("morgan");
const app = express();
const port = 3000;

// template engine
const hbs = create({ /* config */ });

// Register `hbs.engine` with the Express app.
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, "views"));
// console.log(path.join(__dirname, "views"));
// http logger
app.use(morgan("combined"));
// expreess
app.get("/", (req, res) => {
  res.render("home");
});

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
