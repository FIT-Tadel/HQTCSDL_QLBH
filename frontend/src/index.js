import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import UserScreen from './user/UserScreen';
import DriverScreen from './driver/DriverScreen';
import StoreScreen from './store/StoreSceen';
import CompanyScreen from './company/Company';
import { BrowserRouter, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <BrowserRouter>
      <Routes>
          <Route path='/' index element={<App />}/>
          <Route path='User_page' element={<UserScreen />} />
          <Route path='Driver_page' element={<DriverScreen />} />
          <Route path='Store_page' element={<StoreScreen />} />
          <Route path='Company_worker' element={<CompanyScreen />}/>
      </Routes>
  </BrowserRouter>
  </React.StrictMode>
);


reportWebVitals();
