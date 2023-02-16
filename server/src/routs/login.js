const express = require('express');
const router = express.Router();
const { authUser } = require('../controller/logInController');

router.route('/').post(authUser);

module.exports = router;
