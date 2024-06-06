const WebSocket = require('ws');

// WebSocket server URL
const wsServerUrl = 'ws://localhost:4000/graphql';

// Create WebSocket connection
const ws = new WebSocket(wsServerUrl);

// WebSocket connection opened
ws.on('open', function open() {
  console.log('WebSocket client connected');
});

// Receive messages from the WebSocket server
ws.on('message', function incoming(message) {
  console.log('Received message:', message);
});

// WebSocket connection closed
ws.on('close', function close() {
  console.log('WebSocket client disconnected');
});

// WebSocket connection error
ws.on('error', function error(err) {
  console.error('WebSocket error:', err);
});
