const ObjectId = require("mongodb").ObjectId;
const db = require("../db");
const Post = require("../models/post");
module.exports = {
  getAll: (req, res) => {
    Post.find().then(posts => res.json(posts));
  },
  createPost: (req, res) => {
    const post = new Post(req.body);
    post
      .save()
      .then(post => res.status(201).json(post))
      .catch(err => res.status(400).json(err));
  },
  deletePost: (req, res) => {
    Post.findById(req.params.id).then(post => {
      if (post) {
        post
          .delete()
          .then(() => res.status(204).send())
          .catch(() => res.status(500).send());
      } else {
        res.status(404).send();
      }
    });
  }
};
