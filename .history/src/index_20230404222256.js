// import { engine } from "express-handlebars";
// import express from "express";
// import { path } from "path";

const express = require("express");
const path = require("path");
const handlebars = require("express-handlebars");
const morgan = require("morgan");
const app = express();
const port = 3000;
const hbs = create({
	helpers,

	// Uses multiple partials dirs, templates in "shared/templates/" are shared
	// with the client-side of the app (see below).
	partialsDir: [
		"shared/templates/",
		"views/partials/",
	],
});
// http logger
app.use(morgan("combined"));

// template engine
app.engine("handlebars", handlebars.engine);
app.set("view engine", "handlebars");
app.set("views", path.join(__dirname, "views"));
// expreess
app.get("/", (req, res) => {
  res.render("home");
});

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
