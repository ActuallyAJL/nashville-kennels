import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { Kennel } from "./components/Kennel"

ReactDOM.render(
  <React.StrictMode>
    <Kennel />
  </React.StrictMode>,
  document.getElementById('root')
);
