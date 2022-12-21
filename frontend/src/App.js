
import './App.css';
import './css/fonts/fontawesome-free-6.2.0/css/all.min.css'
import React from 'react';
import { Outlet, Link } from "react-router-dom";
import AllError from './AllError';
import '../src/Error/Error 1/error.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
function App() {

  return (
    <div className="App">
      <nav> 
        
        <AllError/>
      </nav>
      <Outlet />
    </div>
  );
}

export default App;
