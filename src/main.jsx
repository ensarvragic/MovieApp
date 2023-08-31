import React from 'react';
import ReactDOM from 'react-dom/client';
import './Styles/index.css';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom'


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <React.StrictMode>
      <App/>
  </React.StrictMode>
  </BrowserRouter>
  
)
