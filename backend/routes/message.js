const Message = require("../models/message");

module.exports = function(router) {
  router.get("/message", (req, res) => {
    Message.find({}, (err, resp) => {
      console.log(resp);
    });
  });
};
