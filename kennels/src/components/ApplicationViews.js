import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { Home } from "./Home";
import { AnimalList } from "./animal/AnimalList.js";
import { AnimalDetail } from "./animal/AnimalDetail.js";
import { AnimalForm } from "./animal/AnimalForm.js";
import { AnimalEditForm } from "./animal/AnimalEditForm";
import { EmployeeList } from "./employee/EmployeeList.js";
import { EmployeeDetail } from "./employee/EmployeeDetail.js";
import { EmployeeForm } from "./employee/EmployeeForm.js";
import { EmployeeEditForm } from "./employee/EmployeeEditForm";
import { LocationList } from "./location/LocationList.js";
import { LocationDetail } from "./location/LocationDetail.js";
import { LocationForm } from "./location/LocationForm.js";
import { LocationEditForm } from "./location/LocationEditForm";
import { CustomerList } from "./customer/CustomerList.js";
import { CustomerDetail } from "./customer/CustomerDetail.js";
import { CustomerForm } from "./customer/CustomerForm.js";
import { CustomerEditForm } from "./customer/CustomerEditForm";
import { MadLib } from "./madlib/MadLib.js";
import { Login } from "./auth/Login";
import { Register } from "./auth/Register";

export const ApplicationViews = ({ isAuthenticated, setIsAuthenticated }) => {
  const PrivateRoute = ({ children }) => {
    return isAuthenticated ? children : <Navigate to="/login" />;
  };

  const setAuthUser = (user) => {
    sessionStorage.setItem("kennel_customer", JSON.stringify(user));
    setIsAuthenticated(sessionStorage.getItem("kennel_customer") !== null);
  };

  return (
    <>
      <Routes>
        {/* Render the location list when http://localhost:3000/ */}
        <Route
          exact
          path="/"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />

        {/* Render the animal list when http://localhost:3000/animals */}
        <Route
          exact
          path="/animals"
          element={
            <PrivateRoute>
              <AnimalList />
            </PrivateRoute>
          }
        />
        <Route
          exact
          path="/animals/:animalId"
          element={
            <PrivateRoute>
              <AnimalDetail />
            </PrivateRoute>
          }
        />
        <Route
          path="/animals/:animalId/edit"
          element={
            <PrivateRoute>
              <AnimalEditForm />
            </PrivateRoute>
          }
        />
        <Route
          path="/animals/create"
          element={
            <PrivateRoute>
              <AnimalForm />
            </PrivateRoute>
          }
        />
        <Route
          path="/locations"
          element={
            <PrivateRoute>
              <LocationList />
            </PrivateRoute>
          }
        />
        <Route
          exact
          path="/locations/:locationId"
          element={
            <PrivateRoute>
              <LocationDetail />
            </PrivateRoute>
          }
        />
        <Route
          path="/locations/:locationId/edit"
          element={
            <PrivateRoute>
              <LocationEditForm />
            </PrivateRoute>
          }
        />
        <Route
          path="/locations/create"
          element={
            <PrivateRoute>
              <LocationForm />
            </PrivateRoute>
          }
        />
        <Route
          path="/customers"
          element={
            <PrivateRoute>
              <CustomerList />
            </PrivateRoute>
          }
        />
         <Route
          exact
          path="/customers/:customerId"
          element={
            <PrivateRoute>
              <CustomerDetail />
            </PrivateRoute>
          }
        />
        <Route
          path="/customers/:customerId/edit"
          element={
            <PrivateRoute>
              <CustomerEditForm />
            </PrivateRoute>
          }
        />
        <Route
          path="/customers/create"
          element={
            <PrivateRoute>
              <CustomerForm />
            </PrivateRoute>
          }
        />
        <Route
          path="/employees"
          element={
            <PrivateRoute>
              <EmployeeList />
            </PrivateRoute>
          }
        />
         <Route
          exact
          path="/employees/:employeeId"
          element={
            <PrivateRoute>
              <EmployeeDetail />
            </PrivateRoute>
          }
        />
        <Route
          path="/employees/:employeeId/edit"
          element={
            <PrivateRoute>
              <EmployeeEditForm />
            </PrivateRoute>
          }
        />
        <Route
          path="/employees/create"
          element={
            <PrivateRoute>
              <EmployeeForm />
            </PrivateRoute>
          }
        />
        <Route
          exact
          path="/login"
          element={<Login setAuthUser={setAuthUser} />}
        />
        <Route exact path="/register" element={<Register />} />
        <Route
          path="/madlib"
          element={
            <PrivateRoute>
              <MadLib />
            </PrivateRoute>
          }
        />
      </Routes>
    </>
  );
};
