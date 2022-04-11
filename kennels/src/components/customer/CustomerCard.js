import React from "react";
import { Link } from "react-router-dom";
import "./Customer.css";

export const CustomerCard = ({ customer, handleDeleteCustomer }) => {
  return (
    <div className="card">
      <div className="card-content">
        <picture>
          <img src={"/images/customer.png"} alt="My Customer" />
        </picture>
        <h3>
          Name: <span className="card-customername">{customer.name}</span>
        </h3>
        <p>Address: {customer.address}</p>
        <button type="button" onClick={() => handleDeleteCustomer(customer.id)}>
          Ban
        </button>
        <Link to={`/customers/${customer.id}`}>
          <button>Details</button>
        </Link>
        <Link to={`/customers/${customer.id}/edit`}>
          <button>Edit</button>
        </Link>
      </div>
    </div>
  );
};
