const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const router  = express.Router();

const { createUser, getAllUsers, updateUser, deleteUser, login} = require('../controllers/userController')

router.post('/users', createUser);
router.get('/users/:id', getAllUsers);
router.put('/users/:id', updateUser);
router.delete('/users/:id', deleteUser);
router.post('/login', login);
module.exports = router;