const Post = require("../model/post");

// Index Route '/'
module.exports.index = (req, res) => {
    res.redirect("/home");
};

// GET Home (all-posts) Route
module.exports.AllPosts = async (req, res) => {
    const allPosts = await Post.find({});
    res.render("pages/home", { allPosts });
};

// GET Specific Post
module.exports.showPost = async (req, res) => {
    const {id} = req.params;
    const post = await Post.findById(id)
    .populate({path: "reviews", 
        populate: {
        path: "author",
        }})
    .populate("owner");
    if(!post) {
        req.flash("error", "That Post does not exists anymore! 🥲");
        res.redirect("/home");
    } else if (post) {
        // console.log(post)
        res.render("pages/show", { id, post });
    }

};


// GET Create form for Post
module.exports.renderNewForm = (req, res) => {
    res.render("pages/create");
};

// POST form data for Post
module.exports.createPost = async (req, res) => {
    let url = req.file.path;
    let filename = req.file.filename;
    const postData = req.body;

    postData.owner = req.user._id;

    const newPost = new Post(postData);
    newPost.image = { url, filename };
    await newPost.save();

    req.flash("success", "New post created 🤩!");
    res.redirect("/home");
};

// GET Edit form for Post
module.exports.renderEditForm = async (req, res) => {
    const {id} = req.params;
    const post = await Post.findById(id);
    if(!post) {
        req.flash("error", "That Post does not exists anymore! 🥲");
        res.redirect("/home");
    } else if (post) {
        let originalImg = post.image.url;
        originalImg.replace("/upload", "/upload/h_50,w_50");
        res.render("pages/edit", { post, originalImg });
    }

};

// POST Updated Form Data
module.exports.updatePost = async (req, res) => {
    const {id} = req.params;
    const updatedData = req.body;
    let post = await Post.findByIdAndUpdate(id, updatedData);
    if (typeof req.file !== "undefined") {
        let url = req.file.path;
        let filename = req.file.filename;
        post.image = { url, filename };
        await post.save();
    }
    req.flash("success", "Post Updated 🥳");
    res.redirect(`/post/${id}`);
};

// DELETE Post Route
module.exports.deletePost = async (req, res) => {
    const {id} = req.params;
    await Post.findByIdAndDelete(id);
    req.flash("success", "Post Deleted 🥺");
    res.redirect("/home");
};