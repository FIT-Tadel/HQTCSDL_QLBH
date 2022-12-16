import React from 'react'
import { Link } from 'react-router-dom'
function Error5F() {
  return (
    <div>
        
        <Link to="worker1_f">
            <button  className='App-login'>
                <div className='App-login-text'> 
                    Nhân viên 1 
                </div>
                <i className='App-login-icon fa-solid fa-user'></i>
          </button>
        </Link>

        <Link to="worker2_f">  
          <button className='App-login'>
              <div className='App-login-text'> 
              Nhân viên 2 
              </div>
              <i className='App-login-icon fa-solid fa-user'></i>
          </button> 
        </Link>

       
    </div>
  )
}

export default Error5F