import React from "react"
import "./Employee.css"

export const EmployeeCard = ({ employee , handleDeleteEmployee }) => (
    <section className="employee">
        <h3 className="employee__name">{employee.name}</h3>
        <div className="employee__address">{employee.address}</div>
        <button type="button" onClick={() => handleDeleteEmployee(employee.id)}>Sack</button>
    </section>
)