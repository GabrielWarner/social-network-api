const router = require('express').Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  updateSingleUser
} = require('../../controllers/userController');

// /api/users
router.route('/').get(getUsers).post(createUser);

// /api/users/:userId
router.route('/:userId').get(getSingleUser).put(updateSingleUser);

module.exports = router;