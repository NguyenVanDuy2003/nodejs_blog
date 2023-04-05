import { engine } from "express-handlebars";
import express from "express";
const morgan = require("morgan");
const app = express();
const port = 3000;

// template 
app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", "./views");

app.use(morgan("combined"));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
