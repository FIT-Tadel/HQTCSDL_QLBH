import React from 'react'
import { useState, useEffect } from 'react';
import apiCaller from '../../utils/apiCaller';

function DoiTacNF4() {

  const [list,setList]=useState([])
  const [url,setUrl]=useState('')

  useEffect(()=>{

    apiCaller(url,'PUT',null).then(res=>{
      setList(res.data)
    })

  },[url])

  function Handle(){
    var result = {list};

    const madh = document.getElementById('madh').value

    const machinhanh = document.getElementById('machinhanh').value

    const tinhtrangch = document.getElementById('tinhtrangch').value

    const tinhtrangdh = document.getElementById('tinhtrangdh').value


    setUrl(`DT_CapNhat_CH_DH/${madh}/${machinhanh}/${tinhtrangch}/${tinhtrangdh}`)

  }

  return (
    <div>
      <form autoComplete='on'> 
          <label for="name" className='error-lable'>Nhập mã đơn hàng:</label>
          <input type="text" id="madh" name="madh" required
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
          
          <input type="submit" name="" value="Submit" className='error-lable' onClick={()=> Handle()}/>
      </form>
    </div>
  )
}

export default DoiTacNF4