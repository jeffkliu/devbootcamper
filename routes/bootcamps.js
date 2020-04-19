const express = require('express');
const {
  getBootcamps,
  getBootcamp,
  createBootcamp,
  updateBootcamp,
  deleteBootcamp,
  deleteAll,
} = require('../controllers/bootcamps');
const router = express.Router();

router.route('/').get(getBootcamps).post(createBootcamp).delete(deleteAll);

router
  .route('/:id')
  .get(getBootcamp)
  .put(updateBootcamp)
  .delete(deleteBootcamp);

module.exports = router;
