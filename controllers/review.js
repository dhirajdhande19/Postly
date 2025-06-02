const Review = require("../model/review");
const Post = require("../model/post");

// POST Review
module.exports.createReview = async (req, res) => {
    let post = await Post.findById(req.params.id).populate("reviews");
    let newReview = new Review(req.body.review);
    newReview.author = req.user._id;
    post.reviews.push(newReview);

    await newReview.save();
    await post.save();
    req.flash("success", "Review Added 🫶");
    res.redirect(`/post/${req.params.id}`);
};

// DELETE Review
module.exports.deleteReview = async (req, res) => {
    let { id, reviewId } = req.params;

    await Post.findByIdAndUpdate(id, {$pull: {reviews: reviewId}});
    await Review.findByIdAndDelete(reviewId);
    req.flash("error", "Review Erased 🧹");
    res.redirect(`/post/${id}`);
};