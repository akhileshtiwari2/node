module.exports = reqFilter = (req, res, next) => {
    if (!req.query.age) {
      res.send("Please provide me the age");
    } else if (req.query.age < 18) {
      res.send("You are not allow to visit on this page");
    } else {
      next();
    }
  };
  