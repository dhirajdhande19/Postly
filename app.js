const express = require("express");
const app =  express();
const Post = require("./model/post");
const path = require("path");
const ejsMate = require("ejs-mate");
const mongoose = require("mongoose");

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

app.set("view engine", "ejs");
app.engine("ejs", ejsMate);
app.set("views", path.join(__dirname, "views"));


app.get("/", async (req, res) => {
    const allPosts = await Post.find({});
    res.render("pages/home", { allPosts });
})

app.listen(1000, () => {
    console.log("server listing to 1000");
});