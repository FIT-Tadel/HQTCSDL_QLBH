import React from 'react'
export default function KhachHangNF() {
  return (
    <div>
      <label for="name" className='error-lable'>Nhap ma don hang:</label>
      <input type="text" id="name" name="name" required
       minlength="4" maxlength="8" size="10" className='error-lable'/>
      
      <input type="submit" name="" value="Submit" className='error-lable'/>
      
    </div>

  )
}
