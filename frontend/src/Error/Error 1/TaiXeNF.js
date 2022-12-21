import React from 'react'

function TaiXeNF() {
  return (
    <div>
      <label for="name" className='error-lable'>Nhap mã đơn hàng:</label>
      <input type="text" id="madh" name="madh" required
       minlength="4" maxlength="8" size="10" className='error-lable'/>

    <label for="name" className='error-lable'>Nhập mã tài xế:</label>
      <input type="text" id="matx" name="matx" required
       minlength="4" maxlength="8" size="10" className='error-lable'/>
      
      <input type="submit" name="" value="Submit" className='error-lable'/>
      
    </div>
  )
}

export default TaiXeNF