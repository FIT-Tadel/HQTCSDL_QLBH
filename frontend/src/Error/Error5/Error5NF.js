import React from 'react'
import { Link } from 'react-router-dom'
function Error5NF() {
  return (
    <div>
        
        <Link to="worker1_nf">
            <button  className='App-login'>
                <div className='App-login-text'> 
                    Nhân viên 1 
                </div>
                <i className='App-login-icon fa-solid fa-user'></i>
          </button>
        </Link>

        <Link to="worker2_nf">  
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

export default Error5NF