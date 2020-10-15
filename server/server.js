const express = require("express");
const bodyParser = require("body-parser");
const passport = require('passport');
const app = express();
const cors = require("cors");
app.use(cors());

const db = require("../db/database.js");
const cookieSession = require('cookie-session')
var bcrypt = require("bcryptjs");
var salt = bcrypt.genSaltSync(10);
require('./passport-setup');
app.use(express.static('dist/education'));
// parse application/json
app.use(bodyParser.json());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// For an actual app you should configure this with an experation time, better keys, proxy and secure
app.use(cookieSession({
    name: 'tuto-session',
    keys: ['key1', 'key2']
}))
// Auth middleware that checks if the user is logged in
const isLoggedIn = (req, res, next) => {
    if (req.user) {
        next();
    } else {
        res.sendStatus(401);
    }
}

// Initializes passport and passport sessions
app.use(passport.initialize());
app.use(passport.session());

// Example protected and unprotected routes
app.get('/', (req, res) => res.send('Example Home page!'))
app.get('/failed', (req, res) => res.send('You Failed to log in!'))

// In this route you can see that if the user is logged in u can acess his info in: req.user
app.get('/good', isLoggedIn, (req, res) => res.send(`Welcome mr ${req.user.displayName}!`))

// Auth Routes
// app.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));
app.get('/google', (req, res) => {
    console.log(`Welcome mr`)
    res.send({text:`Welcome mr`})
});
app.get('/google/callback', passport.authenticate('google', { failureRedirect: '/failed' }),
    function (req, res) {
        // Successful authentication, redirect home.
        res.redirect('/good');
    }
);

app.get('/logout', (req, res) => {
    req.session = null;
    req.logout();
    res.redirect('/');
})

app.listen(3000, () => console.log(`Example app listening on port ${3000}!`))