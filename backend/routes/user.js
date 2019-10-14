const User = require("../models/user");
const bcrypt = require("bcryptjs");
const saltRounds = 10;

module.exports = function(router) {
  router.post("/users", (req, res) => {
    let user = new User();
    let id = 0;
    User.find({}, function(err, users) {
      users.forEach(function(user) {
        if (user.id >= id) {
          id = user.id + 1;
        }
      });
    }).then(() => {
      bcrypt.hash(req.body.data.user.password, saltRounds).then(function(hash) {
        const { firstname, lastname, email } = req.body.data.user;
        user.firstname = firstname;
        user.lastname = lastname;
        user.email = email;
        user.id = id;
        user.password = hash;
        console.log(req.body.data.user);
        console.log(user);
        user.save(err => {
          if (err) return res.json({ success: false, error: err });
          return res.json({ success: true });
        });
      });
    });
  });

  router.get("/users", (req, res) => {
    User.find((err, data) => {
      if (err) return res.json({ success: false, error: err });
      return res.json({ success: true, users: data });
    });
  });
};
