const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./reTechifyDb.sqlite');

const createUser = (req,res) => {
    const { name, email, password } = req.body;
    
    db.run(`INSERT INTO users (name, email, password) VALUES (?, ?, ?)`, [name, email, password], function(err) {
        if (err) {
            console.log(err);
             return res.status(500).json({ message: 'Internal server error' });
        }
        res.status(201).json({ id: this.lastID });
    });
}

module.exports = { createUser };