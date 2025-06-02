if(process.env.NODE_ENV != "production") {
    require('dotenv').config();
}

const express = require("express");
const app =  express();
const path = require("path");
const ejsMate = require("ejs-mate");
const methodOverride =  require("method-override");
const mongoose = require("mongoose");
const ExpressError = require("./utils/ExpressError");
const session = require("express-session");
const MongoStore = require("connect-mongo");
const flash = require("connect-flash");
const passport = require("passport");
const LocalStratergy =  require("passport-local");
const User = require("./model/user");

const postRouter = require("./routes/posts");
const userRouter = require("./routes/user");
const reviewRouter = require("./routes/review");

// const MONGO_URL = "mongodb://127.0.0.1:27017/MediumClone"
const dbUrl = process.env.ATLASDB_URL;

main()
    .then(console.log("connect to DB"))
    .catch(err => console.log(err));

async function main() {
  await mongoose.connect(dbUrl);
};

app.use(express.urlencoded({ extended: true }));// to accept data from form 
app.use(express.json());// to accept JSON bodies
app.use(express.static(path.join(__dirname, "public")));// Serve static assets (CSS, JS, images)

app.use(methodOverride('_method'));
app.set("view engine", "ejs");
app.engine("ejs", ejsMate);
app.set("views", path.join(__dirname, "views"));


const store = MongoStore.create({
    mongoUrl: dbUrl,
    crypto: {
        secret: process.env.SECRET,
    },
    touchAfter: 24 * 3600, // Saves user info on website 
});

store.on("error", () => {
    console.log("ERROR in MONGO SESSION STORE", err);
});

// Saves userinfo as session
const sessionOptions = {
    store,
    secret: process.env.SECRET,
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



app.use("/", postRouter);
app.use("/", userRouter);
app.use("/", reviewRouter);


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