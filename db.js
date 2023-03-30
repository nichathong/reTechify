const sqlite = require('sqlite3').verbose();

const db = new sqlite3.Database('./database.db', (err) => {
    if (err) {
        console.error(err.message);
    } else {
        console.log('We are connected to the database.');
    }
});

module.exports = db;