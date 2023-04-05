import { engine } from "express-handlebars";
import express from "express";
const morgan = require("morgan");
const app = express();
const port = 3000;

// template engine
app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", "./views");
// http logger
app.use(morgan("combined"));
// expreess
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
