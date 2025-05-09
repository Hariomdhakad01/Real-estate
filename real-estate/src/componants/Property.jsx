import { useEffect, useState } from 'react';
import axios from 'axios';

const PropertyList = () => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/properties')
      .then(response => setProperties(response.data))
      .catch(error => console.error('Error fetching properties:', error));
  }, []);

  return (
    <div className="property-list-container">
      <h2 className="property-list-title">Available Properties</h2>
      <div className="property-grid">
        {properties.map((p) => (
          <div className="property-item" key={p.id}>
            <h3>{p.name}</h3>
            <p><strong>Location:</strong> {p.location}</p>
            <p><strong>Type:</strong> {p.type}</p>
          </div>  
        ))}
      </div>
    </div>
  );
};

export default PropertyList;
