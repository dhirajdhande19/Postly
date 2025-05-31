const express = require("express");
const app =  express();
const Post = require("./model/post");
const Review = require("./model/review");
const path = require("path");
const ejsMate = require("ejs-mate");
const methodOverride =  require("method-override");
const mongoose = require("mongoose");
const { postSchema, reviewSchema } = require("./schema");
const ExpressError = require("./utils/ExpressError");
const WrapAsync = require("./utils/WrapAsync");
const session = require("express-session");
const flash = require("connect-flash");
const passport = require("passport");
const LocalStratergy =  require("passport-local");
const User = require("./model/user");
const { isLoggedIn, saveRedirectUrl, isOwner, validatePost, validateReview, isReviewAuthor } = require("./middleware");

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

const sessionOptions = {
    secret: "mySupersecretcod",
    resave: false,
    saveUninitialized: true,
    cookie: {
        expires: Date.now() + 7 * 24 * 60 * 60 * 1000,
        maxAge: 7 * 24 * 60 * 60 * 1000,
        httpOnly: true,
    }
};

app.use(session(sessionOptions));
app.use(flash());

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStratergy(User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use((req, res, next) => {
    res.locals.success = req.flash("success");
    res.locals.error = req.flash("error");
    res.locals.currUser = req.user;
    next();
});




// Index Route
app.get("/", (req, res) => {
    res.redirect("/home");
})

// app.get("/demoUser", async (req, res) => {
//     let fakeuser = new User({
//         email: "studkjfd@gma.com",
//         username: "dhiraj"
//     });

//     const newuser = await User.register(fakeuser, "dhiraj");
//     res.send(newuser);
// });

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
    const post = await Post.findById(id)
    .populate({path: "reviews", 
        populate: {
        path: "author",
        }})
    .populate("owner");
    if(!post) {
        req.flash("error", "post you request for does not exists");
        res.redirect("/home");
    } else if (post) {
        console.log(post)
        res.render("pages/show", { id, post });
    }

}
));

// Create Route
app.get("/newPost",isLoggedIn, (req, res) => {
    res.render("pages/create");

})

// Post route for posts
app.post("/newPost",isLoggedIn,  validatePost, WrapAsync(
    async (req, res) => {
    const post = req.body;
    post.owner = req.user._id;
    
    await Post.insertOne(post);
    req.flash("success", "New post created");
    res.redirect("/home");
}
));

app.get("/signup", (req, res) => {
    res.render("pages/signup");
})

app.post("/signup", async (req, res) => {
    try {
        let { username, email, password } = req.body;
        const newUser = new User ({ email, username });
        const registeredUser = await User.register(newUser, password);
        console.log(registeredUser);
        req.login(registeredUser, (err) => {
            if(err) {
                return next(err);
            }
            req.flash("success", "welcome to postly");
            res.redirect(req.session.redirectUrl);
        })

    } catch(e) {
        req.flash("error", e.message);
        res.redirect("/signup");
    }

})


app.get("/login", (req, res) => {
    res.render("pages/login");
})

app.post("/login",
    saveRedirectUrl,  
    passport.authenticate("local", { failureRedirect: "/login", failureFlash: true }), async(req, res) => {
    req.flash("success", "welcome back user");
    let redirectUrl = res.locals.redirectUrl || "/home";
    res.redirect(redirectUrl);
})


app.get("/logout", (req, res, next) => {
    req.logout((err) => {
        if(err) {
            next(err);
        }
        req.flash("success", "you are logged out");
        res.redirect("/home");
    })
})

// Post Route (Update Route)

// Get route
app.get("/post/:id/edit",isLoggedIn,isOwner,  WrapAsync(
    async (req, res) => {
    const {id} = req.params;
    const post = await Post.findById(id);
    if(!post) {
        req.flash("error", "post you request for does not exists");
        res.redirect("/home");
    } else if (post) {
        res.render("pages/edit", { post });
    }

}
));

// Put (Update route)
app.put("/post/:id/edit",isLoggedIn, isOwner,  validatePost, WrapAsync(
    async (req, res) => {
    const {id} = req.params;
    const updatedData = req.body;
    await Post.findByIdAndUpdate(id, updatedData);
    res.redirect(`/post/${id}`);
}
));

// Delete Route (Posts)
app.delete("/post/:id/delete",isLoggedIn, isOwner,  WrapAsync(
    async (req, res) => {
    const {id} = req.params;
    await Post.findByIdAndDelete(id);
    res.redirect("/home");
}
));

// Review Route

// Create route
app.post("/post/:id/review",isLoggedIn, validateReview,  async (req, res) => {
    let post = await Post.findById(req.params.id).populate("reviews");
    let newReview = new Review(req.body.review);
    newReview.author = req.user._id;
    post.reviews.push(newReview);

    await newReview.save();
    await post.save();
    res.redirect(`/post/${req.params.id}`);
});

// Delete route
app.delete("/post/:id/review/:reviewId",isLoggedIn,isReviewAuthor,  async (req, res) => {
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