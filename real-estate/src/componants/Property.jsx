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
    <div>
      <h2>Available Properties</h2>
      <ul>
        {properties.map((p) => (
          <li key={p.id}>
            {p.name} - {p.location} - Type: {p.type}
          </li>  
        ))}
      </ul>
    </div>
  );
};

export default PropertyList;
