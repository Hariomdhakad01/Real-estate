import React, { useState } from 'react';
import axios from 'axios';

const AddPropertyForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    location: '',
    type: 'buy' 
  });

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post('http://localhost:5000/properties', formData)
      .then(response => {
        alert('Property submitted successfully!');
        setFormData({ name: '', location: '', type: 'buy' });
      })
      .catch(error => {
        console.error('Error submitting property:', error);
        alert('Failed to submit property.');
      });
  };

  return (
    <div className="form-container">
      <h2>Add Property (Buy / Sell / Rent)</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Property Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="location"
          placeholder="Location"
          value={formData.location}
          onChange={handleChange}
          required
        />
        <select name="type" value={formData.type} onChange={handleChange}>
          <option value="buy">Buy</option>
          <option value="sell">Sell</option>
          <option value="rent">Rent</option>
        </select>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddPropertyForm;
