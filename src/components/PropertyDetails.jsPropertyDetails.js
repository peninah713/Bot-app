import React, { useEffect, useState } from 'react';
import axios from 'axios';

const PropertyDetails = ({ match }) => {
  const [property, setProperty] = useState(null);

  useEffect(() => {
    const fetchProperty = async () => {
      const res = await axios.get(`/api/properties/${match.params.id}`);
      setProperty(res.data);
    };
    fetchProperty();
  }, [match.params.id]);

  if (!property) return <div>Loading...</div>;

  return (
    <div>
      <h2>{property.name}</h2>
      <img src={property.image} alt={property.name} />
      <p>{property.description}</p>
      <p>Price: {property.price}</p>
      <p>Location: {property.location}</p>
    </div>
  );
};

export default PropertyDetails;
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const PropertyDetails = ({ match }) => {
  const [property, setProperty] = useState(null);

  useEffect(() => {
    const fetchProperty = async () => {
      const res = await axios.get(`/api/properties/${match.params.id}`);
      setProperty(res.data);
    };
    fetchProperty();
  }, [match.params.id]);

  if (!property) return <div>Loading...</div>;

  return (
    <div>
      <h2>{property.name}</h2>
      <img src={property.image} alt={property.name} />
      <p>{property.description}</p>
      <p>Price: {property.price}</p>
      <p>Location: {property.location}</p>
    </div>
  );
};

export default PropertyDetails;
