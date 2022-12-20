import React from 'react'
import { Link } from 'react-router-dom'
function Error8F() {
  return (
    <div>
        
        <Link to="driver1_f">
            <button  className='App-login'>
                <div className='App-login-text'> 
                Tài xế 1
                </div>
                <i className='App-login-icon fa-solid fa-motorcycle'></i>
          </button>
        </Link>

        <Link to="driver2_f">  
          <button className='App-login'>
              <div className='App-login-text'> 
                  Tài xế 2
              </div>
              <i className='App-login-icon fa-solid fa-motorcycle'></i>
          </button> 
        </Link>

       
    </div>
  )
}

export default Error8F