const User = require("../models/user");
const bcrypt = require("bcryptjs");
const saltRounds = 10;

module.exports = function(router) {
  router.get("/users", (req, res) => {
    User.find((err, data) => {
      if (err) return res.json({ success: false, error: err });
      return res.json({ success: true, users: data });
    });
  });
};
