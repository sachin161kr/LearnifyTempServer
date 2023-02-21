const express = require("express");
const process = require("process");

const app = express();

const mongoose = require("mongoose");

const post = require("./models");

app.use(express.json());

mongoose.connect(
  "mongodb+srv://sachin161kr:lcr693SACHIN@learnifytemp.nwgeasn.mongodb.net/AllPosts",
  () => {
    console.log("database connected");
  }
);

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.post("/api/makePost", (req, res) => {
  const Post = post.create({
    title: req.body.title,
    body: req.body.body,
    imageUrl: req.body.imageUrl,
  });

  if (Post) {
    res.send("Okay");
  } else {
    res.send("error");
  }
});

const PORT = process.env.PORT || 1337;

app.listen(PORT, () => {
  console.log(`Server is running http://localhost:${PORT}`);
});

module.exports = app;

//mongodb+srv://sachin161kr:imsachin%40161@learnifytemp.nwgeasn.mongodb.net/
