const mongoose = require("mongoose");

const post = new mongoose.Schema({
  title: String,
  body: String,
});

module.exports = new mongoose.model("Post", post);
