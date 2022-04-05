import React from "react"
import { Route, Routes} from "react-router-dom"
import { Home } from "./Home"
import { AnimalCard } from './animal/AnimalCard.js'
import { EmployeeCard } from './employee/EmployeeCard.js'
import { LocationCard } from './location/LocationCard.js'
import { CustomerCard } from './customer/CustomerCard.js'

export const ApplicationViews = () => {
    return (
        <>
            <Routes>
                {/* Render the location list when http://localhost:3000/ */}
                <Route exact path="/" element={<Home />} />

                {/* Render the animal list when http://localhost:3000/animals */}
                <Route path="/animals" element={<AnimalCard />} />
                <Route path="/locations" element={<LocationCard />} />
                <Route path="/customers" element={<CustomerCard />} />
                <Route path="/employees" element={<EmployeeCard />} />
            </Routes>
        </>
    )
}