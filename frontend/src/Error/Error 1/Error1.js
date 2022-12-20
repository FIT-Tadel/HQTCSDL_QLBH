
import React from 'react'
import {Outlet, Link } from 'react-router-dom'

function Error1() {
  return (
    <div>
       <nav>
       <Link to="error1_nf">
            <button  className='App-login'>
                <div className='App-login-text'> 
                    NOT FIXED
                </div>
                <i className='App-login-icon fa-solid fa-triangle-exclamation'></i>
          </button>
        </Link>

        <Link to="error1_f">
            <button  className='App-login'>
                <div className='App-login-text'> 
                    FIXED
                </div>
                <i className='App-login-icon fa-solid fa-light fa-circle-check'></i>
          </button>
        </Link>
       </nav>
       <Outlet />
    </div>
  )
}

export default Error1