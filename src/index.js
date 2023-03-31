import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import RandomState from './Context/RandomState';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RandomState>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </RandomState>
  </React.StrictMode>
);

reportWebVitals();
