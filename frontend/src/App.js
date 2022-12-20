
import './App.css';
import './css/fonts/fontawesome-free-6.2.0/css/all.min.css'
import React from 'react';
import { Outlet, Link } from "react-router-dom";
import AllError from './AllError';
import '../src/Error/Error 1/error.css'

function App() {

  return (
    <div className="App">
      <nav> 

        {/* <Link to="/User_page">
          <button  className='App-login'>
            <div className='App-login-text'> 
                Người dùng
            </div>
            <i className='App-login-icon fa-solid fa-users'></i>
          </button>
        </Link>

        <Link to="/Driver_page">  
          <button className='App-login'>
              <div className='App-login-text'> 
                  Tài xế
              </div>
              <i className='App-login-icon fa-solid fa-motorcycle'></i>
          </button> 
        </Link>

        <Link to="Store_page">
          <button className='App-login'>
            <div className='App-login-text'> 
                Đối tác
            </div>
            <i className='App-login-icon fa-sharp fa-solid fa-shop'></i>
          </button>  
        </Link>
        
        <Link to="Company_worker">
          <button className='App-login'>
            <div className='App-login-text'> 
                Nhân viên công ty
            </div>
            <i class="App-login-icon fa-solid fa-user"></i>
          </button>  
        </Link> */}
        
        <AllError/>
      </nav>
      <Outlet />
    </div>
  );
}

export default App;
