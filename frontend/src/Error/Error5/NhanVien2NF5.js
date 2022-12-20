import React from 'react'

function NhanVien2NF5() {
  return (
    <div>
      <label for="name" className='error-lable'>Nhập tên món ăn:</label>
      <input type="text" id="tenmonan" name="tenmonan" required
       minlength="4" maxlength="80" size="10" className='error-lable'/>

      <label for="name" className='error-lable'>Nhập mã thực đơn:</label>
      <input type="text" id="matd" name="matd" required
       minlength="4" maxlength="8" size="10" className='error-lable'/>

      <label for="name" className='error-lable'>Nhập tình trạng món ăn:</label>
      <input type="text" id="tinhtrang" name="tinhtrang" required
       minlength="4" maxlength="30" size="10" className='error-lable'/>
      
      <input type="submit" name="" value="Submit" className='error-lable'/>
    </div>
  )
}

export default NhanVien2NF5