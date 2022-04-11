import React from "react";
import { Link } from "react-router-dom";
import "./Location.css";

export const LocationCard = ({ location, handleDeleteLocation }) => {
  return (
    <div className="card">
      <div className="card-content">
        <picture>
          <img src={"/images/location.webp"} alt="My Location" />
        </picture>
        <h3>
          Name: <span className="card-locationname">{location.name}</span>
        </h3>
        <p>Address: {location.address}</p>
        <button type="button" onClick={() => handleDeleteLocation(location.id)}>
          Nuke
        </button>
        <Link to={`/locations/${location.id}`}>
          <button>Details</button>
        </Link>
        <Link to={`/locations/${location.id}/edit`}>
          <button>Edit</button>
        </Link>
      </div>
    </div>
  );
};
