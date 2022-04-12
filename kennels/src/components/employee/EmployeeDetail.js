import React, { useState, useEffect } from "react";
import { getEmployeeById, deleteEmployee } from "../../modules/EmployeeManager";
import { useParams, useNavigate } from "react-router-dom";
import "./EmployeeDetail.css";

export const EmployeeDetail = () => {
  const [employee, setEmployee] = useState({ name: "", address: "" });
  const [isLoading, setIsLoading] = useState(true);

  const {employeeId} = useParams();
  const navigate = useNavigate();

  const handleDelete = () => {
    //invoke the delete function in EmployeeManger and re-direct to the employee list.
    setIsLoading(true);
    deleteEmployee(employeeId).then(() =>
      navigate("/employees")
    );
  };

  useEffect(() => {
    //getEmployeeById(id) from EmployeeManager and hang on to the data; put it into state
    console.log("useEffect", employeeId)
    getEmployeeById(employeeId)
      .then(employee => {
        setEmployee({
          name: employee.name,
          address: employee.address
        });
        setIsLoading(false);
      });
  }, [employeeId]);

  return (
    <section className="employee">
      <h3 className="employee__name">{employee.name}</h3>
      <div className="employee__address">{employee.address}</div>
      <button type="button" disabled={isLoading} onClick={handleDelete}>
          Sack
        </button>
    </section>
  );
};