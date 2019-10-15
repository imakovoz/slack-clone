const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// this will be our data base's data structure
const DataSchema = new Schema(
  {
    id: Number,
    status: String,
    firstname: String,
    lastname: String,
    email: String,
    password: String,
    threadsJoined: Array,
    messages: Array,
    sessionToken: String
  },
  { timestamps: true }
);

// export the new Schema so we could modify it using Node.js
module.exports = mongoose.model("User", DataSchema);
