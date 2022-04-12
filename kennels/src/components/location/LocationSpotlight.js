import React, { useState, useEffect } from "react";
import { getLocationById } from "../../modules/LocationManager";
import "./LocationSpotlight.css";

export const LocationSpotlight = ({ locationId }) => {
  const [location, setLocation] = useState({});

  useEffect(() => {
    getLocationById(locationId).then((location) => {
      setLocation(location);
    });
  }, [locationId]);

  return (
    <div className="location-spotlight">
      {/* <img src={require('./dog.svg')} alt="My Dog" /> */}
      <div>
        <h3>{location.name}</h3>
        <p>{location.address}</p>
      </div>
    </div>
  );
};
