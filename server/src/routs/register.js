const express = require('express');
const router = express.Router();
const {  addUser } = require('../controller/registerController');

router.route('/').post(addUser);

module.exports = router;
