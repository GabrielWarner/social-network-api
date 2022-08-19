const User = require('../models/User');

module.exports = {
    getUsers(req, res) {
      User.find()
        .populate('thoughts')
        .then((users) => res.json(users))
        .catch((err) => res.status(500).json(err));
    },
    getSingleUser(req, res) {
      User.findOne({ _id: req.params.userId })
        .select('-__v')
        .populate('thoughts')
        .then((user) =>
          !user
            ? res.status(404).json({ message: 'No user with that ID' })
            : res.json(user)
        )
        .catch((err) => res.status(500).json(err));
    },
    // create a new user
    createUser(req, res) {
      User.create(req.body)
        .then((dbUserData) => res.json(dbUserData))
        .catch((err) => res.status(500).json(err));
    },
    updateSingleUser(req,res) {
        User.findOneAndUpdate(
            { _id: req.params.userId },
            { $set: req.body },
            { runValidators: true, new: true }
          )
            .then((user) =>
              !user
                ? res.status(404).json({ message: 'No user with this id!' })
                : res.json(user)
            )
            .catch((err) => {
              console.log(err);
              res.status(500).json(err);
            });
    },
    deleteSingleUser(req,res) {
        User.findOneAndRemove({ _id: req.params.userId })
        .then((user) =>
          !user
            ? res
                .status(404)
                .json({ message: 'No user with this ID!' })
            : res.json({ message: 'User successfully deleted!' })
        )
        .catch((err) => res.status(500).json(err));
    },
    addFriend(req,res) {
      User.findOneAndUpdate(
        { _id: req.params.userId },
        { $push: { friends: { friendId: req.params.friendId } } },
        { runValidators: true, new: true }
      )
        .then((user) =>
          !user
            ? res.status(404).json({ message: 'No user with this id!' })
            : res.json(user)
        )
        .catch((err) => res.status(500).json(err));
    },
  };