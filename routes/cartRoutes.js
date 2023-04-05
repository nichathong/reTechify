const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const router  = express.Router();

const { addToCart, viewCartItem, deleteCartItem, updateCart } = require('../controllers/cartCrontroller');


router.get('/cart', viewCartItem);
router.post('/cart/:productId', addToCart);
router.patch('/cart/:id', updateCart)
router.delete('/cart/:itemId', deleteCartItem);

module.exports = router;
