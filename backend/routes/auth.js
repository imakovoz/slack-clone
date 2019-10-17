const crypto = require("crypto");
const mongoose = require("mongoose");

const User = require("../models/user");
const bcrypt = require("bcryptjs");
const saltRounds = 10;

module.exports = function(router) {
  router.post("/auth/login", (req, res) => {
    User.findOne({ email: req.body.data.user.email }, function(err, result) {
      if (result !== null) {
        bcrypt
          .compare(req.body.data.user.password, result.password)
          .then(function(passCheck) {
            if (passCheck) {
              User.updateOne(
                { _id: mongoose.Types.ObjectId(result._id) },
                {
                  $set: { sessionToken: crypto.randomBytes(20).toString("hex") }
                },
                function(err1, result1) {
                  User.findOne({ email: req.body.data.user.email }, function(
                    err2,
                    result2
                  ) {
                    if (err2) return res.json({ error: err2 });
                    return res.json({
                      currentUser: result2
                    });
                  });
                }
              );
            }
          });
      } else {
        return res.json({ error: "Bad Username" });
      }
    });
  });

  router.get("/auth/checkLogin", (req, res) => {
    console.log(req.body.data);
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
