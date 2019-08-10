const ObjectId = require("mongodb").ObjectId;
const db = require("../db");
const Comment = require("../models/comment");
module.exports = {
  getAll: (req, res) => {
    Comment.find().then(comments => res.json(comments));
  },
 createComment: (req, res) => {
    const comment = new Comment(req.body);
    comment
      .save()
      .then(comment => res.status(201).json(comment))
      .catch(err => res.status(400).json(err));
  },
  
  deleteComment: (req, res) => {
    Comment.findById(req.params.id).then(comment => {
      if (comment) {
        comment
          .delete()
          .then(() => res.status(204).send())
          .catch(() => res.status(500).send());
      } else {
        res.status(404).send();
      }
    });
  }
};
