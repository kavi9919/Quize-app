const express = require('express');
const signupUser = require('../controller/SignUp');

const router = express.Router();
router.post('/signup', signupUser);

module.exports = router;