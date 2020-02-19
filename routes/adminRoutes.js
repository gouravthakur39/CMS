const express = require('express')
const router = express.Router();
const adminController = require('../controllers/adminController');

//  This route is to define a HTML layout for all the sub-routes. 
//  You can define layouts like this for different routes such as 
//  one for frontend and one for admin backend.
router.all('/*',(req, res, next) => {
    req.app.locals.layout = 'admin';
    next();
})

// Routes
router.route("/")
.get(adminController.index );

module.exports = router;