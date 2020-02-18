const express = require('express');
const router = express.Router();
const defaultController = require('../controllers/defaultController');

// Routes
router.route("/")
.get(defaultController.index );

module.exports = router;