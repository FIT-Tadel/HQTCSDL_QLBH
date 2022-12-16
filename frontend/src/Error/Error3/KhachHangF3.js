import React from 'react'

function KhachHangF3() {
  return (
    <div>
      <label for="name" className='error-lable'>Nhập mã thực đơn:</label>
      <input type="text" id="matd" name="matd" required
       minlength="4" maxlength="8" size="10" className='error-lable'/>
      
      <input type="submit" name="" value="Submit" className='error-lable'/>
    </div>
  )
}

export default KhachHangF3