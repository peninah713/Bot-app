import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PropertyCard from '../components/PropertyCard';
import SearchBar from '../components/SearchBar';

const HomePage = () => {
  const [properties, setProperties] = useState([]);
  
  useEffect(() => {
    const fetchProperties = async () => {
      const res = await axios.get('/api/properties');
      setProperties(res.data);
    };
    fetchProperties();
  }, []);

  const handleSearch = (query) => {
    const filteredProperties = properties.filter((property) =>
      property.name.toLowerCase().includes(query.toLowerCase())
    );
    setProperties(filteredProperties);
  };

  return (
    <div>
      <h1>Welcome to Real Estate</h1>
      <SearchBar onSearch={handleSearch} />
      <div className="property-list">
        {properties.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PropertyCard from '../components/PropertyCard';
import SearchBar from '../components/SearchBar';

const HomePage = () => {
  const [properties, setProperties] = useState([]);
  
  useEffect(() => {
    const fetchProperties = async () => {
      const res = await axios.get('/api/properties');
      setProperties(res.data);
    };
    fetchProperties();
  }, []);

  const handleSearch = (query) => {
    const filteredProperties = properties.filter((property) =>
      property.name.toLowerCase().includes(query.toLowerCase())
    );
    setProperties(filteredProperties);
  };

  return (
    <div>
      <h1>Welcome to Real Estate</h1>
      <SearchBar onSearch={handleSearch} />
      <div className="property-list">
        {properties.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PropertyCard from '../components/PropertyCard';
import SearchBar from '../components/SearchBar';

const HomePage = () => {
  const [properties, setProperties] = useState([]);
  
  useEffect(() => {
    const fetchProperties = async () => {
      const res = await axios.get('/api/properties');
      setProperties(res.data);
    };
    fetchProperties();
  }, []);

  const handleSearch = (query) => {
    const filteredProperties = properties.filter((property) =>
      property.name.toLowerCase().includes(query.toLowerCase())
    );
    setProperties(filteredProperties);
  };

  return (
    <div>
      <h1>Welcome to Real Estate</h1>
      <SearchBar onSearch={handleSearch} />
      <div className="property-list">
        {properties.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
