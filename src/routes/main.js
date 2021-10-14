const express = require('express');
const router = express.Router();
const mainControllers = require('../controllers/mainControllers')
const path = require('path');

/* home */
router.get('/', mainControllers.home);

module.exports = router;