const mongoose = require("mongoose");
const { type } = require("os");
const Schema = mongoose.Schema;

const postSchema = new Schema ({
    title : String,
    content: String,
    summary : String,
    publishedAt : String,
    claps: Number,
    commentsCount: Number,
});

const Post = mongoose.model("Post", postSchema);

module.exports = Post;