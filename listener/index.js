const io = require('socket.io')(3001);
const crypto = require('crypto');
const mongoose = require('mongoose');

// Connecting to MongoDB
mongoose.connect('mongodb://localhost:27017/timeseries', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Define MongoDB schema and model
const dataSchema = new mongoose.Schema({
  // schema 
});

const DataModel = mongoose.model('Data', dataSchema);

io.on('connection', (socket) => {
  socket.on('dataStream', (encryptedData) => {
    const encryptedMessages = encryptedData.split('|');
    
    encryptedMessages.forEach((encryptedMessage) => {
      
    });
  });
});
