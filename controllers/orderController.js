const express = require('express');
const router = express.Router();
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./reTechifyDb.sqlite');
const stripe = require('stripe')('STRIPE_SECRET_KEY');

// Checkout 
const checkOut = (req, res) => {
  const { cartData, customerInfo, paymentInfo } = req.body;

  // Create Stripe charge
  stripe.charges.create({
    amount: cartData.totalPrice * 100, // Stripe requires the amount to be in the smallest currency unit
    currency: 'usd',
    description: 'reTechify purchase',
    source: paymentInfo.tokenId
  }, (err, charge) => {
    if (err) {
      console.error(err.message);
      return res.status(500).send('Server error');
    }

    // Add order to database
const sqlInsert = `INSERT INTO orders(name, email, phone, address, total, created_at, cartData, paymentData, orderStatus)
  VALUES (?, ?, ?, ?, ?, DEFAULT CURRENT_TIMESTAMP, ?, ?, ?)`;

    db.run(sqlInsert, [
      customerInfo.name,
      customerInfo.email,
      customerInfo.phone,
      customerInfo.address,
      cartData.totalPrice,
      JSON.stringify(cartData),
      JSON.stringify(paymentInfo),
      'Pending'
    ], function (err) {
      if (err) {
        console.log(err.message);
        return res.status(500).send('Server error');
      }

      res.status(200).send("Order placed successfully");
    });
  });
};

module.exports = { checkOut };
