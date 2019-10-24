const Thread = require("../models/thread");

module.exports = function(router) {
  router.post("/threads", (req, res) => {
    console.log(req.body.data);
    let thread = new Thread();
    thread.title = req.body.data.name;
    thread.tagLine = req.body.data.description;
    thread.save(err => {
      if (err) return res.json({ error: err });
      console.log(thread);
      return res.json({ thread: thread });
    });
  });

  router.get("/threads", (req, res) => {
    Thread.find((err, data) => {
      if (err) return res.json({ success: false, error: err });
      return res.json({ success: true, threads: data });
    });
  });

  router.delete("/threads/:id", (req, res) => {
    console.log(req.params.id);
    const id = req.params.id;
    Thread.findByIdAndRemove(id, err => {
      if (err) return res.send(err);
      Thread.find((err, data) => {
        if (err) return res.json({ success: false, error: err });
        return res.json({ success: true, threads: data });
      });
      // return res.json({ success: true });
    });
  });
};
