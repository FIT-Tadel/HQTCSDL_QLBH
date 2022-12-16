import React from 'react'
import { Link } from 'react-router-dom'
function Error4NF() {
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

        <Link to="driver_nf">  
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

export default Error4NF