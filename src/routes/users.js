const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersControllers')
const path = require('path');

/* register */
router.get('/register', usersController.register);
router.post('/register', usersController.registered);

/* login */
router.get('/login', usersController.login);
router.post('/login', usersController.logued);


module.exports = router;