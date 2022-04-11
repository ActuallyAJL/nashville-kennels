import React from "react";
import { Link } from "react-router-dom";
import "./Employee.css";

export const EmployeeCard = ({ employee, handleDeleteEmployee }) => {
  return (
    <div className="card">
      <div className="card-content">
        <picture>
          <img src={"/images/employee.webp"} alt="My Employee" />
        </picture>
        <h3>
          Name: <span className="card-employeename">{employee.name}</span>
        </h3>
        <p>Address: {employee.address}</p>
        <button type="button" onClick={() => handleDeleteEmployee(employee.id)}>
          Sack
        </button>
        <Link to={`/employees/${employee.id}`}>
          <button>Details</button>
        </Link>
        <Link to={`/employees/${employee.id}/edit`}>
          <button>Edit</button>
        </Link>
      </div>
    </div>
  );
};
