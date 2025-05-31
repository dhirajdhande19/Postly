const mongoose = require("mongoose");
const { type } = require("os");
const Schema = mongoose.Schema;
const Review = require("./review");

const postSchema = new Schema ({
    title : String,
    subtitle: String,
    content: String,
    publishedAt : {
        type: Date,
        default: Date.now(),
    },
    claps: Number,
    commentsCount: Number,
    imageUrl: String,
    reviews: [
        {
            type: Schema.Types.ObjectId,
            ref: "Review",
        },
    ],
    owner: {
        type: Schema.Types.ObjectId,
        ref: "User",
    }
});

postSchema.post("findOneAndDelete", async (post) => {
    if (post) {
        await Review.deleteMany({ _id : {$in: post.reviews} });
    }

})

const Post = mongoose.model("Post", postSchema);

module.exports = Post;