const express = require("express");
const router = express.Router();
const userController = require("../controllers/user");
const WrapAsync = require("../utils/WrapAsync");
const passport = require("passport");
const { saveRedirectUrl } = require("../middleware");


// Signup Route
router
.route("/signup")
.get(userController.renderSignupForm)
.post(WrapAsync(userController.signupUser))

// Login Route
router
.route("/login")
.get(userController.renderLoginForm)
.post(
    saveRedirectUrl,  
    passport.authenticate("local", 
        { 
            failureRedirect: "/login", 
            failureFlash: true 
        }), WrapAsync(userController.loginUser)
)

// Logout User
router
.get("/logout", userController.logoutUser)

module.exports = router;