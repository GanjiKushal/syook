import React, { useState, useEffect } from 'react';
import './App.css';
import socketIOClient from 'socket.io-client';

const ENDPOINT = 'http://localhost:3001'; 

function App() {
  const [data, setData] = useState([]);
  const [successRate, setSuccessRate] = useState(0);

  useEffect(() => {
    const socket = socketIOClient(ENDPOINT);

    socket.on('dataStream', (encryptedData) => {
      const decryptedData = decryptAndValidateData(encryptedData); 
      
      if (decryptedData) {
        setData((prevData) => [...prevData, decryptedData]);
      }
      
      // Calculate and update success rate
      const rate = calculateSuccessRate(data.length + 1);
      setSuccessRate(rate);
    });

    return () => {
      socket.disconnect();
    };
  }, [data]);

  //This function to decrypt and validate data
  const decryptAndValidateData = (encryptedData) => {
    // Decrypt the data and validate secret key, returning the decrypted data if validation is successful or it will return null
  };

  //this function to calculate success rate
  const calculateSuccessRate = (totalReceived) => {
    return ((data.length + 1) / totalReceived) * 100;
  };

  return (
    <div className="App">
      <h1>Encrypted Time Series Data</h1>
      <div>
        <h2>Data Stream</h2>
        <ul>
          {data.map((item, index) => (
            <li key={index}>
              Name: {item.name} | Origin: {item.origin} | Destination: {item.destination} | Timestamp: {item.timestamp}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h2>Success Rate</h2>
        <p>{successRate.toFixed(2)}%</p>
      </div>
    </div>
  );
}

export default App;
