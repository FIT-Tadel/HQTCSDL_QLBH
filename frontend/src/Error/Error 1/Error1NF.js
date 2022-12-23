import React from 'react'
import { Link } from 'react-router-dom'

function Error1NF() {
  return (
    <div>
        <Link to="user_nf">
            <button  className='App-login'>
                <div className='App-login-text'> 
                    Khách Hàng
                </div>
                <i className='App-login-icon fa-solid fa-users'></i>
          </button>
        </Link>

        <Link to="driver_nf">  
          <button className='App-login'>
              <div className='App-login-text'> 
                  Tài Xế
              </div>
              <i className='App-login-icon fa-solid fa-motorcycle'></i>
          </button> 
        </Link>
    </div>
  )
}

export default Error1NF

