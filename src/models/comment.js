
const mongoose = require("mongoose");
const commentSchema = new mongoose.Schema({
  author: String,
  content: String,
  likes: Number,
  createdAt: Date,
  postId: mongoose.Schema.Types.ObjectId
});
const Comment = mongoose.model("comment", commentSchema);
module.exports = Comment;
