const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const router  = express.Router();

const { createUser } = require('../controllers/userController')

router.post('/users', createUser);

module.exports = router;