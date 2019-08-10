const ObjectId = require("mongodb").ObjectId;
const db = require("../db");
const User = require("../models/user");
module.exports = {
  getAll: (req, res) => {
    User.find().then(users => res.json(users));
  },
  createUser: (req, res) => {
    const user = new User(req.body);
    user
      .save()
      .then(user => res.status(201).json(user))
      .catch(err => res.status(400).json(err));
  },
  deleteUser: (req, res) => {
    User.findById(req.params.id).then(user => {
      if (user) {
        user
          .delete()
          .then(() => res.status(204).send())
          .catch(() => res.status(500).send());
      } else {
        res.status(404).send();
      }
    });
  },
  login: (req, res) => {
    User.findOne({
      username: req.body.username,
      password: req.body.password
    })
      .then(user => {
        if (user) {
          res.cookie("user", user._id, { maxAge: 99999999 });
          res.status(200).json({ result: "I foun)d you" });
        } else {
          res.status(403).json({ result: "nope" });
        }
      })
      .catch(err => res.json(err));
  },
  me: (req, res) => {
    res.json(req.cookiess);
  }
};
