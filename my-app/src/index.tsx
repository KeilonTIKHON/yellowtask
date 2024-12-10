import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css'; // Import global CSS styles
import App from './App'; // Import the main App component
import { BrowserRouter } from 'react-router-dom'; // Router for SPA functionality
import LoginPage from './pages/Login';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

