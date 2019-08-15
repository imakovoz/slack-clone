const Data = require('../models/data');
const User = require('../models/user');

module.exports = function(router) {
  router.post('/users', (req, res) => {
    // let user = new User();
    //
    // const { id, status, firstName, lastName, userName, threadsJoined, messages } = req.body;
    //
    // if ((!id && id !== 0) || !message) {
    //   return res.json({
    //     success: false,
    //     error: 'INVALID INPUTS',
    //   });
    // }
    // data.message = message;
    // data.id = id;
    // data.save((err) => {
    //   if (err) return res.json({ success: false, error: err });
    //   return res.json({ success: true });
    // });




    res.end('test');
    console.log(req);
  });
};
