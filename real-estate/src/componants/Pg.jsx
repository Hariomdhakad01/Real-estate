import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PGModule = () => {
  const [rooms, setRooms] = useState([]);
  const [beds, setBeds] = useState();
  const [rate, setRate] = useState();
  const [bill, setBill] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:5000/rooms')
      .then(res => setRooms(res.data))
      .catch(err => console.error('Failed to fetch rooms', err));
  }, []);

  const generateBill = () => {
    const baseAmount = beds * rate;
    const tax = baseAmount * 0.18;
    const finalAmount = baseAmount + tax;
    setBill(
      {
       baseAmount,
       tax,
       finalAmount 
      }
    );
  };

  return (
    <div>
      <h2>PG Module</h2>
      <h3>Vacant Rooms</h3>
      <ul>
        {rooms.filter(r => r.vacant).map(r => (
          <li key={r.roomNo}>Room {r.roomNo} is vacant</li>
        ))}
      </ul>

      
      <h3>Room Occupancy</h3>
      <table border="2px">
        <thead>
          <tr>
            <th>Room</th>
            <th>Total Beds</th>
            <th>Occupied</th>
            </tr>
        </thead>
        <tbody>
          {rooms.map(r => (
            <tr key={r.roomNo}>
              <td>{r.roomNo}</td>
              <td>{r.beds}</td>
              <td>{r.occupiedBeds}</td>
            </tr>
          ))}
        </tbody>
      </table>

    
      <h3>Generate PG Monthly Bill</h3>
      <input
        type="number"
        placeholder="Quantity of Beds"
        value={beds}
        onChange={e => setBeds(+e.target.value)}
      />
      <input
        type="number"
        placeholder="Price per Bed (₹)"
        value={rate}
        onChange={e => setRate(+e.target.value)}
      />
      <button onClick={generateBill}>Generate Bill</button>

      {bill && (
        <div style={{ marginTop: '20px' }}>
          <p><strong>Beds:</strong> {beds}</p>
          <p><strong>Price per Bed:</strong> ₹{rate}</p>
          <p><strong>Base Amount:</strong> ₹{bill.baseAmount.toFixed(2)}</p>
          <p><strong>Tax (18%):</strong> ₹{bill.tax.toFixed(2)}</p>
          <p><strong>Final Amount:</strong> ₹{bill.finalAmount.toFixed(2)}</p>
        </div>
      )}
    </div>
  );
};

export default PGModule;