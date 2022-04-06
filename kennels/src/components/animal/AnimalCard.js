import React from "react"
import "./Animal.css"

export const AnimalCard = ({ animal }) => {
    return (
      <div className="card">
        <div className="card-content">
          <picture>
              <img src={'https://raw.githubusercontent.com/NSS-Day-Cohort-55/client-side-mastery/a352e0b7bae43d678c703daf379e8b2004f11415/07-nashville-kennels/chapters/images/dog.svg'} alt="My Dog" />
            </picture>
          <h3>Name: <span className="card-petname">
            {animal.name}
          </span></h3>
          <p>Breed: {animal.breed}</p>
        </div>
      </div>
    );
  }