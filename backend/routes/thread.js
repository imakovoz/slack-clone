const Thread = require("../models/thread");
const bcrypt = require("bcryptjs");
const saltRounds = 10;

module.exports = function(router) {
  router.post("/threads", (req, res) => {
    console.log(req.body.data);
    // User.find((err, data) => {
    //   if (err) return res.json({ success: false, error: err });
    //   return res.json({ success: true, users: data });
    // });
  });
};
