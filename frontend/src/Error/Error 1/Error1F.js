import React from 'react'
import { Link } from 'react-router-dom'

function Error1F() {
  return (
    <div>
        <Link to="user_f">
            <button  className='App-login'>
                <div className='App-login-text'> 
                    Khach Hang
                </div>
                <i className='App-login-icon fa-solid fa-users'></i>
          </button>
        </Link>

        <Link to="driver_f">  
          <button className='App-login'>
              <div className='App-login-text'> 
                  Tài xế
              </div>
              <i className='App-login-icon fa-solid fa-motorcycle'></i>
          </button> 
        </Link>
    </div>
  )
}

export default Error1F

