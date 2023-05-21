const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./reTechifyDb.sqlite')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const createUser = (req,res) => {
    const { name, email, password } = req.body;
    
    db.run(`INSERT INTO users (name, email, password) VALUES (?, ?, ?)`, [name, email, password], function(err, row) {
        if (err) {
            console.log(name, email, password)
             return res.status(500).json({ message: 'Internal server error' });
        }
        res.status(201).json({ id: this.lastID });
    });
}

const getAllUsers = (req, res) => {
    const id = req.params.id;

    db.get(`SELECT * FROM users WHERE id=?`, [id], function(err, row) {
        if(err) {
            console.log(err)
            return res.status(500).json({ message: 'Internal server error' });
        }

        if(!row) {
            return res.status(404).send('User not found');
        }

        res.status(200).json(row);
    })
}

const updateUser = ( req, res ) => {
    const id = req.params.id;
    const { name, email, password } = req.body;
    
    db.run(`UPDATE users SET name = ?, email = ?, password = ? WHERE id = ?`, [name, email, password, id], function(err) {
        if (err) {
            console.log(err);
            return res.status(500).json({ message: 'Internal server error' });
        }
        res.status(200).send(`User with id ${id} has been updated`);
  });
}

const deleteUser = (req, res) => {
    const id = req.params.id;

    db.run(`DELETE FROM users WHERE id = ?`, [id], function(err) {
    if (err) {
        console.log(err);
        return res.status(500).json({ message: 'Internal server error' });
    }

    res.status(200).send(`User with id ${id} has been deleted`);
  
    });
}

const login = (req, res) => {
    const { email, password } = req.body;

  // Find the user based on the email
  const user = users.find(user => user.email === email);

  // If the user doesn't exist, return an error
  if (!user) {
    return res.status(401).json({ error: 'Invalid credentials' });
  }

  // Check if the password is correct
  bcrypt.compare(password, user.password, (err, result) => {
    if (err || !result) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    // Generate a JSON Web Token (JWT) with the user's ID
    const token = jwt.sign({ userId: user.id }, 'your_secret_key_here', { expiresIn: '1h' });

    // Return the token as a response
    res.status(200).json({ token });
  });
}
module.exports = { createUser, getAllUsers, updateUser, deleteUser, login };