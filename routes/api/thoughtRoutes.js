const router = require('express').Router();
const {
  getSingleThought,
  getThoughts,
  createThought,
  updateSingleThought,
  deleteSingleThought,
} = require('../../controllers/thoughtController');

router.route('/').get(getThoughts).post(createThought);

router.route('/:thoughtId').get(getSingleThought).put(updateSingleThought).delete(deleteSingleThought);

module.exports = router;