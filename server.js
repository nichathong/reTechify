const express = require('express');
const cors = require('cors');
const WebSocket = require('ws');
const sqlite3 = require('sqlite3').verbose();
const productRoutes = require('./routes/productsRoutes')
const orderRoutes = require('./routes/orderRoutes.js');
const cartRoutes = require('./routes/cartRoutes')
const userRoutes = require('./routes/userRoutes');
// const { handleConnection } = require('./controllers/wsController');
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Server is up!')
});

const server = app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
});

// const wss = new WebSocket.Server({ server });

// wss.on('connection', function connection(ws, req) {
//     handleConnection(ws, req);
// });

app.use('/', productRoutes);
app.use('/', orderRoutes);
app.use('/', cartRoutes);
app.use('/', userRoutes);

// Error handling middleware
app.use(function(err, req, res, next) {
    console.error(err.stack);
    res.status(500).send('Server error');
});

