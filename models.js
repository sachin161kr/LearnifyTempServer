const mongoose = require("mongoose");

const post = new mongoose.Schema({
  title: { type: String, unique: true, require: true },
  body: { type: String, unique: true, require: true },
  imageUrl: { type: String },
});

module.exports = new mongoose.model("Post", post);
