const mongoose = require("mongoose");
const PostSchema = new mongoose.Schema({
  title: String,
  content: String,
  picture: String,
  likes: Number,
  createdAt: Date,
  tags: Array,
  userId: mongoose.Schema.Types.ObjectId
});
const Post = mongoose.model("post", PostSchema);
module.exports = Post;
