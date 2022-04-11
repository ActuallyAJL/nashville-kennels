import React, { useState, useEffect } from "react";
import { getCustomerById } from "../../modules/CustomerManager";
import "./CustomerSpotlight.css";

export const CustomerSpotlight = ({ customerId }) => {
  const [customer, setCustomer] = useState({});

  useEffect(() => {
    getCustomerById(customerId).then((customer) => {
      setCustomer(customer);
    });
  }, [customerId]);

  return (
    <div className="customer-spotlight">
      {/* <img src={require('./dog.svg')} alt="My Dog" /> */}
      <div>
        <h3>{customer.name}</h3>
        <p>{customer.address}</p>
      </div>
    </div>
  );
};
