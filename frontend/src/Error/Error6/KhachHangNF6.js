import React from 'react'

function KhachHangNF6() {
  return (
    <div>
      <label for="name" className='error-lable'>Nhập mã đơn hàng:</label>
      <input type="text" id="madh" name="madh" required
       minlength="4" maxlength="8" size="10" className='error-lable'/>

      <label for="name" className='error-lable'>Nhập tên món:</label>
      <input type="text" id="tenmon" name="tenmon" required
       minlength="4" maxlength="30" size="10" className='error-lable'/>

      <label for="name" className='error-lable'>Nhập số lượng:</label>
      <input type="text" id="soluong" name="soluong" required
       minlength="4" maxlength="8" size="10" className='error-lable'/>
      
      <input type="submit" name="" value="Submit" className='error-lable'/>
    </div>
  )
}

export default KhachHangNF6