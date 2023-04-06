const express = require('express');
const router = express.Router();
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./reTechifyDb.sqlite');
const stripe = require('stripe')('STRIPE_SECRET_KEY');
const WebSocket = require('ws');

// Create WebSocket server
const wss = new WebSocket.Server({ noServer: true });

// Handle WebSocket connection
wss.on('connection', function connection(ws) {
  console.log('WebSocket client connected');
});

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

      // Notify client of new order using WebSocket
      const order = {
        type: 'orderPlaced',
        orderId: this.lastID,
        status: 'Pending',
        timestamp: new Date().getTime(),
        message: 'New order placed'
      };
      wss.clients.forEach(function each(client) {
        if (client.readyState === WebSocket.OPEN) {
          client.send(JSON.stringify(order));
        }
      });

      res.status(200).send("Order placed successfully");
    });
  });
};

// Update order status
const updateOrderStatus = (req, res) => {
  const orderId = req.params.id;
  const newStatus = req.body.status;

  // Update order in database
  const sqlUpdate = `UPDATE orders SET orderStatus = ? WHERE id = ?`;

  db.run(sqlUpdate, [newStatus, orderId], function (err) {
    if (err) {
      console.log(err.message);
      return res.status(500).send('Server error');
    }

    // Notify client of order status update using WebSocket
    const orderUpdate = {
      type: 'orderStatusUpdate',
      orderId: orderId,
      status: newStatus,
      timestamp: new Date().getTime(),
      message: `Order status updated to ${newStatus}`
    };
    wss.clients.forEach(function each(client) {
      if (client.readyState === WebSocket.OPEN) {
        client.send(JSON.stringify(orderUpdate));
      }
    });

    res.status(200).send(`Order status updated to ${newStatus}`);
  });

};

// Delivery update
const sendDeliveryUpdate = (orderId, status) => {
    const deliveryUpdate = {
        orderId: orderId,
        status: status,
        timestamp: new Date().getTime(),
        message: 'Delivery update'
    };
    wss.clients.forEach(function each(client) {
        if (client.readyState === WebSocket.OPEN) {
            client.send(JSON.stringify({
                type: 'deliveryUpdate',
                payload: deliveryUpdate
            }));
        }
    });
};

module.exports = { checkOut, updateOrderStatus, sendDeliveryUpdate };