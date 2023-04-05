const express = require('express');
const cors = require('cors');
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors');
const WebSockets = require('ws');
const productRoutes = require('./routes/productsRoutes')
const orderRoutes = require('./routes/orderRoutes.js');
const cartRoutes = require('./routes/cartRoutes')


const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Server is up!')
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
});

const wss = new WebSocket.Server({ server });

wss.on('connection', function connection(ws) {
    ws.on('message', function incoming(data) {
        console.log('received message: %s', data);
    });
});


app.use('/', productRoutes);
app.use('/', orderRoutes);
app.use('/', cartRoutes);

