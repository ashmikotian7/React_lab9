import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // <== import BrowserRouter
import App from './App.jsx';
import './index.css'; // if you have styles

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>   {/* <== wrap your App inside BrowserRouter */}
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
