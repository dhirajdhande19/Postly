const User = require("../model/user");

// GET Signup
module.exports.renderSignupForm = (req, res) => {
    res.render("pages/signup");
};

// POST signup
module.exports.signupUser = async (req, res) => {
    try {
        let { username, email, password } = req.body;
        const newUser = new User ({ email, username });
        const registeredUser = await User.register(newUser, password); // User gets registered auto by passport
        // console.log(registeredUser);
        req.login(registeredUser, (err) => {
            if(err) {
                return next(err);
            }
            req.flash("success", `Welcome to postly ${req.body.username}🔥`);
            res.redirect("/home"); 

        })

    } catch(e) {
        req.flash("error", e.message);
        res.redirect("/signup");
    }

};

// GET login
module.exports.renderLoginForm = (req, res) => {
    res.render("pages/login");
};

// POST login
module.exports.loginUser = async(req, res) => {
    req.flash("success", "Hey! Welcome back 🚀");
    let redirectUrl = res.locals.redirectUrl || "/home";
    res.redirect(redirectUrl); // Redirects to the page user wanted to go before loging in
};

// GET logout
module.exports.logoutUser = (req, res, next) => {
    req.logout((err) => { // Passport helps in logout too auto
        if(err) {
            next(err);
        }
        req.flash("success", "You logged out 🫡");
        res.redirect("/home");
    })
};