import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './components/App'; // Update this path based on your project structure

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
