const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./reTechifyDb.sqlite');
// const { validateCartData } = require('../middlewares/validation');

const addToCart = (req, res) => {
    const { productId, quantity } = req.body;
    const sqlGet = `SELECT * FROM products WHERE id = ?`;

    db.get(sqlGet, [productId], (err, product) => {
        if (err) {
        console.error(err.message);
        return res.status(500).send('Server error');
    }

        if (!product) {
        return res.status(404).send('Product not found');
    }

    const cartData = {
        productId: product.id,
        name: product.name,
        image: product.image,
        price: product.price,
        quantity: quantity,
    };
    
    const sqlAddToCart = `INSERT INTO cart(productId, name, image, price, quantity) VALUES (?, ?, ?, ?, ?)`;

    db.run(sqlAddToCart, [cartData.productId, cartData.name, cartData.image, cartData.price, cartData.quantity], (err) => {
        if (err) {
            console.error(err.message);
            return res.status(500).send('Server error');
        }

        res.status(201).send('Item added to cart successfully!');
        });
    });
}

const viewCartItem = (req, res) => {
    const sql = `SELECT * FROM cart`;

    db.all(sql, (err, rows) => {
        if (err) {
            console.log(err.message);
            return res.status(500).send('Server error');
        }

        if(!rows.length) {
            return res.status(404).send('Your cart is empty');
        }

        res.status(200).json(rows)
    });
}

const deleteCartItem = (req, res) => {
    const id = req.params.id;
    const sql = `DELETE FROM cart WHERE id = ?`;
    
    db.run(sql, [id], function(err) {
        if (err) {
            console.error(err.message);
            return res.status(500).send('Server error');
        }

        if (this.changes === 0) {
            return res.status(404).send('Item not found');
        }

        res.status(200).send(`${product.name} has been removed from your cart`);
    });

}

const updateCart = (req, res) => {
    const id = req.params.id; 
    const { quantity } = req.body;

    const sql = `UPDATE cart SET quantity = ? WHERE id = ?`;
    db.run(sql, [quantity, id], (err) => {
        if (err) {
          console.error(err.message);
          return res.status(500).send('Server error');
        }

        res.status(200).send(`Quantity of item with ID ${id} updated successfully`);
        ;
    });
}

module.exports = { addToCart, viewCartItem, deleteCartItem, updateCart};

