const post = require("../models/PostModel").Post;

module.exports = {
  index: (req, res) => {
    res.render("admin/index");
  },
  getPosts: (req, res) => {
    res.send("All posts");
  },
  submitPosts: (req, res) => {
    const newPost = new post({
      title: req.body.title,
      description: req.body.description,
      status: req.body.status
    });
    newPost.save().then(post => {
      // console.log(post);
      req.flash("success-message", "Post created successfully");
      req.redirect("/admin/posts");
    });
  },
  createPosts: (req, res) => {
    res.render("admin/posts/create");
  }
};
