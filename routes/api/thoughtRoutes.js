const router = require('express').Router();
const {
  getSingleThought,
  getThoughts,
  createThought,
  updateSingleThought,
  deleteSingleThought,
  addThoughtReaction,
  deleteThoughtReaction
} = require('../../controllers/thoughtController');

router.route('/').get(getThoughts).post(createThought);

router.route('/:thoughtId').get(getSingleThought).put(updateSingleThought).delete(deleteSingleThought);

router.route('/:thoughtId/reactions').post(addThoughtReaction)

router.route('/:thoughtId/reactions/:reactionId').delete(deleteThoughtReaction);


module.exports = router;