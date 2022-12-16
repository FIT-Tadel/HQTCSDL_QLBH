import React from 'react'
import { Link } from 'react-router-dom'
function Error6F() {
  return (
    <div>
        
        <Link to="user_f">
            <button  className='App-login'>
                <div className='App-login-text'> 
                    Khách hàng 
                </div>
                <i className='App-login-icon fa-solid fa-users'></i>
          </button>
        </Link>

        <Link to="partner_f">  
          <button className='App-login'>
              <div className='App-login-text'> 
                  Đối tác
              </div>
              <i className='App-login-icon fa-solid fa-shop'></i>
          </button> 
        </Link>

       
    </div>
  )
}

export default Error6F