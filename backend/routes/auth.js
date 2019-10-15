var crypto = require("crypto");

const User = require("../models/user");
const bcrypt = require("bcryptjs");
const saltRounds = 10;

module.exports = function(router) {
  router.post("/auth/login", (req, res) => {
    console.log(req.body.data.user.email);
    User.findOne({ email: req.body.data.user.email }, function(err, result) {
      bcrypt
        .compare(req.body.data.user.password, result.password)
        .then(function(passCheck) {
          console.log(passCheck);
          if (err) return res.json({ error: err });
          return res.json({
            currentUser: req.body.data.user.password
          });
        });
    });
  });

  router.post("/auth/signup", (req, res) => {
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
        user.sessionToken = crypto.randomBytes(20).toString("hex");
        console.log(req.body.data.user);
        console.log(user);
        user.save(err => {
          if (err) return res.json({ error: err });
          return res.json({ currentUser: user });
        });
      });
    });
  });
};
