import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { LocationCard } from "./LocationCard";
import {
  getAllLocations,
  getLocationById,
  deleteLocation,
} from "../../modules/LocationManager";

export const LocationList = () => {
  // The initial state is an empty array
  const [locations, setLocations] = useState([]);

  const getLocations = () => {
    // After the data comes back from the API, we
    // use the setAnimals function to update state
    return getAllLocations().then((locationsFromAPI) => {
      setLocations(locationsFromAPI);
    });
  };

  const handleDeleteLocation = (id) => {
    deleteLocation(id).then(() => getAllLocations().then(setLocations));
  };

  const navigate = useNavigate();

  // got the animals from the API on the component's first render
  useEffect(() => {
    getLocations();
  }, []);

  // Finally we use .map() to "loop over" the animals array to show a list of animal cards
  return (
    <>
      <div className="container-cards">
        {locations.map((location) => (
          <LocationCard
            key={location.id}
            location={location}
            handleDeleteLocation={handleDeleteLocation}
          />
        ))}
      </div>
      <section className="section-content">
        <button
          type="button"
          className="btn"
          onClick={() => {
            navigate("/locations/create");
          }}
        >
          Build Location
        </button>
      </section>
    </>
  );
};
