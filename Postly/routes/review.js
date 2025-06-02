const express = require("express");
const router = express.Router();
const WrapAsync = require("../utils/WrapAsync");
const reviewController = require("../controllers/review");
const { isLoggedIn, validateReview, isReviewAuthor } = require("../middleware");


// Create Review Route
router
.post("/post/:id/review", 
    isLoggedIn, 
    validateReview,
    WrapAsync(reviewController.createReview)
)

// Destroy Review Route
router
.delete("/post/:id/review/:reviewId", 
    isLoggedIn, 
    isReviewAuthor,
    WrapAsync(reviewController.deleteReview)
)

module.exports = router;