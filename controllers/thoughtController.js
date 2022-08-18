const { Thought, User } = require('../models');

module.exports = {
  getThoughts(req, res) {
    Thought.find()
      .then((thought) => res.json(thoughts))
      .catch((err) => res.status(500).json(err));
  },
  getSingleThought(req, res) {
    Thought.findOne({ _id: req.params.thoughtId })
      .then((post) =>
        !post
          ? res.status(404).json({ message: 'No thoughts with that ID' })
          : res.json(post)
      )
      .catch((err) => res.status(500).json(err));
  },
  // create a new thought
  createThought(req, res) {
    Thought.create(req.body)
      .then((post) => {
        return User.findOneAndUpdate(
          { _id: req.body.userId },
          { $addToSet: { posts: post._id } },
          { new: true }
        );
      })
      .then((user) =>
        !user
          ? res
              .status(404)
              .json({ message: 'Thought created, but found no user with that ID' })
          : res.json('Created the thought 🎉')
      )
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },
};