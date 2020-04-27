const express = require('express');
const {
  getReviews,
  getReview,
  addReview,
  updateReview,
  deleteReview,
} = require('../controllers/reviews');

const Review = require('../models/Review');

const advancedResults = require('../middleware/advancedResults');

const router = express.Router({ mergeParams: true });

//hash, encryption
const { protect, authorize } = require('../middleware/auth');

router
  .route('/')
  .get(
    advancedResults(Review, {
      path: 'bootcamp',
      select: 'name description',
    }),
    getReviews
  )
  .post(protect, addReview);

router
  .route('/:id')
  .get(getReview)
  .put(protect, authorize('publisher', 'admin', 'user'), updateReview)
  .delete(protect, authorize('publisher', 'admin', 'user'), deleteReview);

module.exports = router;
