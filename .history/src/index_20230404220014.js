// import { engine } from "express-handlebars";
// import express from "express";
// import { path } from "path";

const express = require("express");
const path = require("path");
const engine = require("express-handlebars");




const morgan = require("morgan");
const app = express();
const port = 3000;

// app.engine('handlebars',engine());
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');

// http logger
app.use(morgan("combined"));
// expreess
app.get("/", (req, res) => {
  res.send("home");
});

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
