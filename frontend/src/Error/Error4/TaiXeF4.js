import React from 'react'

function TaiXeF4() {
  return (
    <div>
      <label for="name" className='error-lable'>Nhập mã đơn hàng:</label>
      <input type="text" id="madh" name="madh" required
       minlength="4" maxlength="30" size="10" className='error-lable'/>

      <label for="name" className='error-lable'>Nhập mã tài xế:</label>
      <input type="text" id="mataixe" name="mataixe" required
       minlength="4" maxlength="30" size="10" className='error-lable'/>
      
      <input type="submit" name="" value="Submit" className='error-lable'/>
    </div>
  )
}

export default TaiXeF4