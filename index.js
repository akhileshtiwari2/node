const express = require("express");
const app = express();

const reqFilter = (req, res, next) => {
  if (!req.query.age) {
    res.send("Please provide me the age");
  } else if (req.query.age < 18) {
    res.send("You are not allow to visit on this page");
  } else {
    next();
  }
};

// app.use(reqFilter);

app.get("/", (req, res) => {
  res.send("Welcome to the Home Page");
});
app.get("/profile", (req, res) => {
  res.send("Welcome to the Profile Page");
});
app.get("/about",reqFilter, (req, res) => {
    res.send("Welcome to the About us Page");
  });
app.listen(3000);
