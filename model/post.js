const mongoose = require("mongoose");
const { type } = require("os");
const Schema = mongoose.Schema;

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
});

const Post = mongoose.model("Post", postSchema);

module.exports = Post;