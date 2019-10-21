const Thread = require("../models/thread");

module.exports = function(router) {
  router.post("/threads", (req, res) => {
    console.log(req.body.data);
    let thread = new Thread();
    thread.title = req.body.data.name;
    thread.tagLine = req.body.data.description;
    thread.save(err => {
      if (err) return res.json({ error: err });
      return res.json({ thread: thread });
    });
  });
};
