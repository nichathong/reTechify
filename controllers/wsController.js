const WebSocket = require('ws');

const wss = new WebSocket.Server({ noServer: true });

const handleConnection = (ws, req) => {
    console.log('New websocket connection');
    ws.send('Welcome to the websocket server!');

    ws.on('message', (message) => {
        console.log('recieve: %s', message);

        ws.send('Received message: ' + message);
    });

    ws.on('close', () => {
        console.log('Websocket connection closed');
    });
};

module.exports = { handleConnection };