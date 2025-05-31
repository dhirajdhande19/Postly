const express = require("express");
const app =  express();
const Post = require("./model/post");
const Review = require("./model/review");
const path = require("path");
const ejsMate = require("ejs-mate");
const methodOverride =  require("method-override");
const mongoose = require("mongoose");
const { postSchema } = require("./schema");
const WrapAsync = require("./utils/WrapAsync");
const ExpressError = require("./utils/ExpressError");

const MONGO_URL = "mongodb://127.0.0.1:27017/MediumClone"

main()
    .then(console.log("connect to DB"))
    .catch(err => console.log(err));

async function main() {
  await mongoose.connect(MONGO_URL);
};

app.use(express.urlencoded({ extended: true }));// to accept data from form 
app.use(express.json());// to accept JSON bodies
app.use(express.static(path.join(__dirname, "public")));// Serve static assets (CSS, JS, images)

app.use(methodOverride('_method'));
app.set("view engine", "ejs");
app.engine("ejs", ejsMate);
app.set("views", path.join(__dirname, "views"));


function validatePost(req, res, next) {
  let { error } = postSchema.validate(req.body);
  if(error) {
    let errMsg = error.details.map((el) => el.message).join(",");
    throw new ExpressError(404, errMsg);
  } else {
    next();
  }
};

// Index Route
app.get("/", (req, res) => {
    res.redirect("/home");
})

// Home Route (all posts)
app.get("/home", WrapAsync(
    async (req, res) => {
    const allPosts = await Post.find({});
    res.render("pages/home", { allPosts });
}
));

// Show Route (For specific Posts)
app.get("/post/:id", WrapAsync(
    async (req, res) => {
    const {id} = req.params;
    const post = await Post.findById(id).populate("reviews");
    res.render("pages/show", { id, post });
}
));

// Create Route
app.get("/newPost", (req, res) => {
    res.render("pages/create");
})

// Post route for posts
app.post("/newPost", validatePost, WrapAsync(
    async (req, res) => {
    const post = req.body;
    await Post.insertOne(post);
    res.redirect("/home");
}
));


// Post Route (Update Route)

// Get route
app.get("/post/:id/edit", WrapAsync(
    async (req, res) => {
    const {id} = req.params;
    const post = await Post.findById(id);
    res.render("pages/edit", { post });
}
));

// Put (Update route)
app.put("/post/:id/edit", validatePost, WrapAsync(
    async (req, res) => {
    const {id} = req.params;
    const updatedData = req.body;
    await Post.findByIdAndUpdate(id, updatedData);
    res.redirect(`/post/${id}`);
}
));

// Delete Route (Posts)
app.delete("/post/:id/delete", WrapAsync(
    async (req, res) => {
    const {id} = req.params;
    await Post.findByIdAndDelete(id);
    res.redirect("/home");
}
));

// Review Route

// Create route
app.post("/post/:id/review", async (req, res) => {
    let post = await Post.findById(req.params.id).populate("reviews");
    let newReview = new Review(req.body.review);
    post.reviews.push(newReview);

    await newReview.save();
    await post.save();
    res.redirect(`/post/${req.params.id}`);
});

// Delete route
app.delete("/post/:id/review/:reviewId", async (req, res) => {
    let { id, reviewId } = req.params;

    await Post.findByIdAndUpdate(id, {$pull: {reviews: reviewId}});
    await Review.findByIdAndDelete(reviewId);
    res.redirect(`/post/${id}`);
})

app.all(/.*/, (req, res, next) => {
    // res.send("Page Not Found!");
    next(new ExpressError(404, "Page Not Found"));
});

app.use((err, req, res, next) => {
    let { statusCode = 500, message = "Something Went Wrong" } = err;
    res.status(statusCode).render("pages/error", { message });
    // console.dir(err.message);
    next();
})

app.listen(1000, () => {
    console.log("server listing to 1000");
});