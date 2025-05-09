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
    setBill({ baseAmount, tax, finalAmount });
  };

  return (
    <div className="pg-wrapper">
      <h2 className="pg-title">PG Management Module</h2>

      <section className="pg-section">
        <h3 className="pg-subtitle">Vacant Rooms</h3>
        <ul className="pg-vacant-list">
          {rooms.filter(r => r.vacant).map(r => (
            <li key={r.roomNo} className="pg-vacant-item">
              Room {r.roomNo} is vacant
            </li>
          ))}
        </ul>
      </section>

      <section className="pg-section">
        <h3 className="pg-subtitle">Room Occupancy Details</h3>
        <table className="pg-room-table">
          <thead>
            <tr>
              <th>Room No</th>
              <th>Total Beds</th>
              <th>Occupied Beds</th>
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
      </section>

      <section className="pg-section">
        <h3 className="pg-subtitle">Generate Monthly Bill</h3>
        <input
          className="pg-input"
          type="number"
          placeholder="No. of Beds"
          value={beds}
          onChange={e => setBeds(+e.target.value)}
        />
        <input
          className="pg-input"
          type="number"
          placeholder="Rate per Bed (₹)"
          value={rate}
          onChange={e => setRate(+e.target.value)}
        />
        <button className="pg-button" onClick={generateBill}>
          Generate Bill
        </button>

        {bill && (
          <div className="pg-bill-summary">
            <p><strong>Beds:</strong> {beds}</p>
            <p><strong>Rate per Bed:</strong> ₹{rate}</p>
            <p><strong>Base Amount:</strong> ₹{bill.baseAmount.toFixed(2)}</p>
            <p><strong>Tax (18%):</strong> ₹{bill.tax.toFixed(2)}</p>
            <p><strong>Total Amount:</strong> ₹{bill.finalAmount.toFixed(2)}</p>
          </div>
        )}
      </section>
    </div>
  );
};

export default PGModule;
