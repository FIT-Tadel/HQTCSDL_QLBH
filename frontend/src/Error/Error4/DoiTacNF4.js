import React from 'react'

function DoiTacF4() {
  return (
    <div>
      <label for="name" className='error-lable'>Nhập tên món ăn:</label>
      <input type="text" id="tenmon" name="temon" required
       minlength="4" maxlength="8" size="10" className='error-lable'/>

      <label for="name" className='error-lable'>Nhập mã thực đơn:</label>
      <input type="text" id="matd" name="matd" required
       minlength="4" maxlength="8" size="10" className='error-lable'/>

      <label for="name" className='error-lable'>Nhập mã chi nhánh:</label>
      <input type="text" id="machinhanh" name="machinhanh" required
       minlength="4" maxlength="8" size="10" className='error-lable'/>

      <label for="name" className='error-lable'>Nhập tình trạng cửa hàng:</label>
      <input type="text" id="tinhtrangch" name="tinhtrangch" required
       minlength="4" maxlength="30" size="10" className='error-lable'/>

      <label for="name" className='error-lable'>Nhập tình trạng đơn hàng:</label>
      <input type="text" id="tinhtrangdh" name="tinhtrangdh" required
       minlength="4" maxlength="30" size="10" className='error-lable'/>
      
      <input type="submit" name="" value="Submit" className='error-lable'/>
    </div>
  )
}

export default DoiTacF4