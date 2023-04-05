const express = require("express");
const path = require("path");
const handlebars = require("express-handlebars");
const morgan = require("morgan");
const app = express();
const port = 3000;

// http logger
app.use(morgan("combined"));

// template engine
app.engine("handlebars", handlebars.engine({ extname: ".hbs" }));
app.set("view engine", "handlebars");
app.set("views", path.join(__dirname, "resources/views"));
// expreess
app.get("/", (req, res) => {
  res.render("home");
});
app.get("/news", (req, res) => {
  res.render("news");
});

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
