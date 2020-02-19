const express = require('express');
const router = express.Router();
const defaultController = require('../controllers/defaultController');

//  This route is to define a HTML layout for all the sub-routes. 
//  You can define layouts like this for different routes such as 
//  one for frontend and one for admin backend.
router.all('/*',(req, res, next) => {
    req.app.locals.layout = 'default';
    next();
})

// Routes
router.route("/")
.get(defaultController.index );

router.route("/login")
.get(defaultController.loginGet)
.post(defaultController.loginPost);

router.route("/register")
.get(defaultController.registerGet)
.post(defaultController.registerPost);

module.exports = router;