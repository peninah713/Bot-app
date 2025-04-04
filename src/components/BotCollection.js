import React from 'react';
import { Link } from 'react-router-dom';

const PropertyCard = ({ property }) => {
  return (
    <div className="property-card">
      <img src={property.image} alt={property.name} />
      <h3>{property.name}</h3>
      <p>{property.location}</p>
      <p>{property.price}</p>
      <Link to={`/properties/${property.id}`}>View Details</Link>
    </div>
  );
};

export default PropertyCard;

