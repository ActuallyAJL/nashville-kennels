import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { Home } from "./Home";
import { AnimalList } from "./animal/AnimalList.js";
import { AnimalDetail } from "./animal/animalDetail.js";
import { AnimalForm } from "./animal/AnimalForm.js";
import { EmployeeList } from "./employee/EmployeeList.js";
import { LocationList } from "./location/LocationList.js";
import { CustomerList } from "./customer/CustomerList.js";
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
          path="/animals/details/:animalId"
          element={
            <PrivateRoute>
              <AnimalDetail />
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
          path="/customers"
          element={
            <PrivateRoute>
              <CustomerList />
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
