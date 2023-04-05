import { engine } from "express-handlebars";
import express from "express";
import { engine } from "express-handlebars";

const morgan = require("morgan");
const app = express();
const port = 3000;

// template engine
app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", path.join(__dirname, "views"));
console.log(__dirname);
// http logger
app.use(morgan("combined"));
// expreess
app.get("/", (req, res) => {
  res.render("home");
});

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
