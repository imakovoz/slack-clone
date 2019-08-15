const User = require('../models/user');

module.exports = function(router) {
  router.post('/users', (req, res) => {
    let user = new User();
    let id = 0;
    User.find({}, function(err, users) {
      users.forEach(function(user) {
        if (user.id >= id) {
          id = user.id + 1;
        }
      });
    }).then(() => {
      const { firstname, lastname, email } = req.body.data.user;

      user.firstname = firstname;
      user.lastname = lastname;
      user.email = email;
      user.id = id;
      console.log(req.body.data.user);
      console.log(user);
      user.save((err) => {
        if (err) return res.json({ success: false, error: err });
        return res.json({ success: true });
      });

    });
  });

  router.get('/users', (req, res) => {

    User.find((err, data) => {
      if (err) return res.json({ success: false, error: err });
      return res.json({ success: true, users: data });
    });
  });
};
