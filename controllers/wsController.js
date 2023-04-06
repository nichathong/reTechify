const WebSocket = require('ws');
const wss = new WebSocket.Server({ noServer: true });
const db = require('../reTechifyDb.sqlite');

const handleConnection = (ws, req) => {
  console.log('New websocket connection');
  ws.send('Welcome to the websocket server!');

  ws.on('message', async (message) => {
    console.log('Received message: %s', message);

    // Parse incoming message as JSON
    const data = JSON.parse(message);

    // Check the type of message and handle appropriately
    if (data.type === 'orderPlaced') {
      const orderId = data.orderId;
      const orderStatus = data.orderStatus;
      const sqlUpdate = `UPDATE orders SET orderStatus = ? WHERE id = ?`;

      // Update the order status in the database
      db.run(sqlUpdate, [orderStatus, orderId], function (err) {
        if (err) {
          console.error(err.message);
          return ws.send(JSON.stringify({ type: 'error', message: 'Error updating order status' }));
        }

        // Notify the client that the order status has been updated
        ws.send(JSON.stringify({ type: 'orderStatusUpdate', orderId: orderId, orderStatus: orderStatus }));
      });
    } else if (data.type === 'deliveryUpdate') {
      const orderId = data.orderId;
      const deliveryStatus = data.deliveryStatus;
      const sqlUpdate = `UPDATE orders SET deliveryStatus = ? WHERE id = ?`;

      // Update the delivery status in the database
      db.run(sqlUpdate, [deliveryStatus, orderId], function (err) {
        if (err) {
          console.error(err.message);
          return ws.send(JSON.stringify({ type: 'error', message: 'Error updating delivery status' }));
        }

        // Notify the client that the delivery status has been updated
        ws.send(JSON.stringify({ type: 'deliveryStatusUpdate', orderId: orderId, deliveryStatus: deliveryStatus }));
      });
    } else if (data.type === 'returnUpdate') {
      const orderId = data.orderId;
      const returnStatus = data.returnStatus;
      const sqlUpdate = `UPDATE orders SET returnStatus = ? WHERE id = ?`;

      // Update the return status in the database
      db.run(sqlUpdate, [returnStatus, orderId], function (err) {
        if (err) {
          console.error(err.message);
          return ws.send(JSON.stringify({ type: 'error', message: 'Error updating return status' }));
        }

        // Notify the client that the return status has been updated
        ws.send(JSON.stringify({ type: 'returnStatusUpdate', orderId: orderId, returnStatus: returnStatus }));
      });
    }
  });

  ws.on('close', () => {
    console.log('Websocket connection closed');
  });
};

module.exports = { handleConnection };
