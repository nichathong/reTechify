const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./reTechifyDb.sqlite');

const getProductById = (req, res) => {
    const id = req.params.id;
    const sql = `SELECT * FROM products WHERE id = ?`

    db.get(sql, [id], (err, row) => {
        if (err) {
            console.error(err.message);
            return res.status(500).send('Server error');
        };

        if (!row) {
        return res.status(404).send('Product not found');
    }

    res.status(200).json(row);
    });
}

const getAllProducts = (req, res) => {
    const sql = `SELECT * FROM products`

    db.all(sql, (err, row) => {
        if (err) {
            console.error(err.message);
            return res.status(500).send('Server error');    
        }

        if (!row) {
            return res.status(404).send('Product not found');
        }
        
        res.status(200).json(row);
    });

}


const createProduct = (req, res) => {
    const { name, description, price, image, condition } = req.body;
    const sql = `INSERT INTO products(name, description, price, image, condition) VALUES (?, ?, ?, ?, ?)`;

    db.run(sql, [name, description, price, image, condition], function(err) {
        if (err) {
            console.error(err.message);
        return res.status(500).send('Server error');
    }

    if (!name || !description || !price || !condition) {
        return res.status(400).send('Missing required fields')
    }
  
    res.status(201).send('Product created successfully');
});

};

const updateProduct = (req, res) => {
    const { id } = req.params;
    const { name, description, price, image, condition } = req.body;

    const sql = `UPDATE products SET name=?, description=?, price=?, image=?, condition=? WHERE id=?`;
    db.run(sql, [name, description, price, image, condition, id], function(err) {
        if (err) {
            console.error(err.message);
        return res.status(500).send('Server error');
    }

    if (this.changes === 0) {
        return res.status(404).send('Product not found')
    }

    res.status(200).send(`Your ${id} ${name} information got update successfully!`)
    });
};

const deleteProduct = (req, res) => {
    const id = req.params.id;
    const sql = `DELETE FROM products WHERE id=?`;

    db.run(sql, [id], function(err) {
        if (err) {
            console.log(err.message);
            return res.status(500).send('Server error');
        }

        if (this.changes === 0) {
            return res.status(400).send('Product not found');
        
        }

        res.status(200).send(`Product with ID ${id} deleted successfully`);

    });
};

module.exports = { createProduct, updateProduct, deleteProduct, getProductById, getAllProducts };
