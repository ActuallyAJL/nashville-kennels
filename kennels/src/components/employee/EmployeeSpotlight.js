import React, { useState, useEffect } from "react";
import { getEmployeeById } from "../../modules/EmployeeManager";
import "./EmployeeSpotlight.css";

export const EmployeeSpotlight = ({ employeeId }) => {
  const [employee, setEmployee] = useState({});

  useEffect(() => {
    getEmployeeById(employeeId).then((employee) => {
      setEmployee(employee);
    });
  }, [employeeId]);

  return (
    <div className="employee-spotlight">
      {/* <img src={require('./dog.svg')} alt="My Dog" /> */}
      <div>
        <h3>{employee.name}</h3>
        <p>{employee.address}</p>
      </div>
    </div>
  );
};
