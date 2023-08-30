const socket = require('socket.io-client');
const crypto = require('crypto');
const data = require('./data.json'); 

// Connect to the listener service
const socketClient = socket.connect('http://localhost:3001');

// Function to generate a secret key
function generateSecretKey(obj) {
  const hash = crypto.createHash('sha256');
  hash.update(JSON.stringify(obj));
  return hash.digest('hex');
}

// Function to encrypt a message
function encryptMessage(message, passkey) {
}

// Function to generate random data
function generateRandomData() {
  //Random data from the data.json file
}

// Emit data stream every 10 seconds
setInterval(() => {
  const encryptedMessages = [];

  for (let i = 0; i < randomNumMessages; i++) {
    const message = generateRandomData();
    const secretKey = generateSecretKey(message);
    const encryptedMessage = encryptMessage(message, secretKey);
    encryptedMessages.push(encryptedMessage);
  }

  socketClient.emit('dataStream', encryptedMessages.join('|'));
}, 10000);
