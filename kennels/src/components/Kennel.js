// import React from "react";
// import { AnimalCard } from "./animal/AnimalCard";
// import { LocationCard } from "./location/LocationCard";
// import { EmployeeCard } from "./employee/EmployeeCard";
// import { CustomerCard } from "./customer/CustomerCard";
// import { PropsAndState } from "./PropsAndState";
// import "./Kennel.css";

// export const Kennel = () => (
//   <>
//     <h2>Nashville Kennels</h2>
//     <small>Loving care when you're not there.</small>

//     <address>
//       <div>Visit Us at the Nashville North Location</div>
//       <div>500 Puppy Way</div>
//     </address>

//     <PropsAndState yourName="Alex" />
//     <h2>Animals</h2>
//     <article className="animals">
//       <AnimalCard />
//       <AnimalCard />
//       <AnimalCard />
//     </article>
//     <h2>Locations</h2>
//     <article className="locations">
//       <LocationCard />
//       <LocationCard />
//     </article>
//     <h2>Customers</h2>
//     <article className="customers">
//       <CustomerCard />
//       <CustomerCard />
//       <CustomerCard />
//       <CustomerCard />
//     </article>
//     <h2>Employees</h2>
//     <article className="employees">
//       <EmployeeCard />
//       <EmployeeCard />
//       <EmployeeCard />
//     </article>
//   </>
// );


import React from "react"
import { NavBar } from "./nav/NavBar"
import { ApplicationViews } from "./ApplicationViews.js"
import "./Kennel.css"

export const Kennel = () => (
    <>
        <NavBar />
        <ApplicationViews />
    </>
)