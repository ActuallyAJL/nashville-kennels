// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import reportWebVitals from './reportWebVitals';
// import { Kennel } from "./components/Kennel"

// ReactDOM.render(
//   <React.StrictMode>
//     <Kennel />
//   </React.StrictMode>,
//   document.getElementById('root')
// );


import React from 'react';
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom"
import { Kennel } from './components/Kennel';
import './index.css';

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Router>
      <Kennel />
    </Router>
  </StrictMode>
);