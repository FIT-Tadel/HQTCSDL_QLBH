import React from 'react'
import { Link } from 'react-router-dom'
function Error2NF() {
  return (
    <div>
        <Link to="partner_nf">
            <button  className='App-login'>
                <div className='App-login-text'> 
                    Đối tác 
                </div>
                <i className='App-login-icon fa-solid fa-shop'></i>
          </button>
        </Link>

        <Link to="user_nf">  
          <button className='App-login'>
              <div className='App-login-text'> 
                  Khách Hàng
              </div>
              <i className='App-login-icon fa-solid fa-users'></i>
          </button> 
        </Link>
    </div>
  )
}

export default Error2NF