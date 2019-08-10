const express = require("express");
const bodyParser = require("body-parser");
const cookieParse = require("cookie-parser");
const app = express();
const port = 3000;
const morgan = require("morgan");
const users = require("./controllers/users");
const posts = require("./controllers/posts");
const comments = require("./controllers/comments");

app.use(morgan("combined"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParse());

app.get("/", (req, res) => {
  res.send();
});
app.get("/user", users.getAll);
app.put("/user", users.createUser);
app.delete("/user/:id", users.deleteUser);
app.post("/user/login", users.login);
app.get("/user/me", users.me);

app.get("/post", posts.getAll);
app.put("/post", posts.createPost);
app.delete("/post/:id", posts.deletePost);

app.get("/comment", comments.getAll);
app.put("/comment", comments.createComment);
app.delete("/comment/:id", comments.deleteComment);

app.listen(port, () => {
  require("./db");
  console.log(`Example app listening on port ${port}!`);
});
