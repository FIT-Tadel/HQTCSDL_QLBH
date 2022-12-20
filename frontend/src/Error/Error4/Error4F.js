import React from 'react'
import { Link } from 'react-router-dom'
function Error4F() {
  return (
    <div>
        
        <Link to="partner_f">
            <button  className='App-login'>
                <div className='App-login-text'> 
                    Đối tác 
                </div>
                <i className='App-login-icon fa-solid fa-shop'></i>
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

export default Error4F