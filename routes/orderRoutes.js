const express = require('express');
const router = express.Router();
const { checkOut } = require('../controllers/orderController');

// POST /checkout
router.post('/checkout', checkOut);

module.exports = router;
