const express = require("express");
const router = express.Router();
const WrapAsync = require("../utils/WrapAsync");
const postController = require("../controllers/posts");
const multer = require("multer");
const {storage} = require("../cloudConfig");
const upload = multer({ storage });
const { isLoggedIn, isOwner, validatePost } = require("../middleware");

router
.route("/")
.get(postController.index)

// Get All Posts
router
.get("/home", WrapAsync(postController.AllPosts))

// Get Specific Post
router
.get("/post/:id", WrapAsync(postController.showPost))

// Create New Post
router
.route("/newPost")
.get(postController.renderNewForm)
.post(  
    isLoggedIn,     
    validatePost,  
    upload.single('image'),         
    WrapAsync(postController.createPost)
)

// Edit Post
router
.route("/post/:id/edit")
.get(
    isLoggedIn,
    isOwner,  
    WrapAsync(postController.renderEditForm)
)
.put(
    isLoggedIn, 
    isOwner,
    upload.single('image'), 
    validatePost, 
    WrapAsync(postController.updatePost)
)

// Destroy Route
router
.delete ("/post/:id/delete", 
    isLoggedIn, 
    isOwner,  
    WrapAsync(postController.deletePost)
)

module.exports = router;