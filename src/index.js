// src/index.js

import React from 'react';
import ReactDOM from 'react-dom/client'; // Updated import
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import './index.css';
import ContextProvider from './context/Context';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container); // Create a root

root.render(
  <React.StrictMode>
    <Router>
      <ContextProvider>
      <App />
      </ContextProvider>
    </Router>
  </React.StrictMode>
);
