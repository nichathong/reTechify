const db = require('./db');

db.all('SELECT * FROM products', [], (err, rows) => {
  if (err) {
    throw err;
  }

  console.log(rows); // log entire rows array

  rows.forEach((row) => {
    console.log(row.name);
  });
});
