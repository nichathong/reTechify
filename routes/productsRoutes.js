const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const router  = express.Router();

const { createProduct, updateProduct, deleteProduct, getProductById, getAllProducts } = require('../controllers/productController');


router.get('/products', getAllProducts)
router.get('/:id', getProductById);
router.post('/createProduct', createProduct);
router.patch('/:id', updateProduct);
router.delete('/:id', deleteProduct);
module.exports = router;
