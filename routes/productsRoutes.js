const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const router  = express.Router();

const { createProduct, updateProduct, deleteProduct } = require('../controllers/productController');

router.get('/products', (req, res) => {
    const db = new sqlite3.Database('./reTechifyDb.sqlite');

    db.all('SELECT * FROM products', (err, rows) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }

        res.json(rows);

        db.close();
    });
});

router.post('/createProduct', createProduct);
router.patch('/:id', updateProduct);
router.delete('/:id', deleteProduct);

module.exports = router;
