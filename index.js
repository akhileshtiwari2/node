const express = require("express");
const reqFilter = require('./middleware')
const app = express();
const route = express.Router();

route.use(reqFilter);

app.get("/", (req, res) => {
  res.send("Welcome to the Home Page");
});
route.get("/profile", (req, res) => {
  res.send("Welcome to the Profile Page");
});
route.get("/about", (req, res) => {
    res.send("Welcome to the About us Page");
  });

app.use('/',route);
app.listen(3000);

