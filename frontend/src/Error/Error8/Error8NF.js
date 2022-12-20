import React from 'react'
import { Link } from 'react-router-dom'
function Error8NF() {
  return (
    <div>
        
        <Link to="driver1_nf">
            <button  className='App-login'>
                <div className='App-login-text'> 
                Tài xế 1
                </div>
                <i className='App-login-icon fa-solid fa-motorcycle'></i>
          </button>
        </Link>

        <Link to="driver2_nf">  
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

export default Error8NF