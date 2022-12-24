import React from 'react'
import $ from 'jquery';
import { useState, useEffect } from 'react';
import apiCaller from '../../utils/apiCaller';

function DoiTacNF6() {

  const [list,setList]=useState([])
  const [url,setUrl]=useState('')
  const [count,setCount]=useState(0)

  useEffect(()=>{

    apiCaller(url,'GET',null).then(res=>{
      setList(res.data);
    })

  },[count])

  function Handle(){


    const madh= document.getElementById('madh').value

    const tenmon= document.getElementById('tenmon').value


    setUrl(`Xem_CT_DonHang/${madh}/${tenmon}`)


    var monan= {list};
    console.log({list})
    setCount(count+1)

    var table = document.getElementById('myTable')
    table.innerHTML=''

    var row=`<tr>
    <td>${monan.list[0].MADH} </td>
    <td>${monan.list[0].TENMON} </td>
    <td>${monan.list[0].SOLUONGMON} </td>
  </tr>`
  table.innerHTML+=row

  }

  return (
    <div>
      <label for="name" className='error-lable'>Nhập mã đơn hàng:</label>
      <input type="text" id="madh" name="madh" required
       minlength="4" maxlength="8" size="10" className='error-lable'/>

      <label for="name" className='error-lable'>Nhập tên món:</label>
      <input type="text" id="tenmon" name="tenmon" required
       minlength="4" maxlength="30" size="10" className='error-lable'/>

      <input type="submit" name="" value="Submit" className='error-lable' onClick={()=> Handle()}/>

      <table className='table table-striped'>
        <thead>
          <tr className='bg-info'>
            <th>MADH</th>
            <th>TENMON</th>
            <th>SOLUONGMON</th>

          </tr>
        </thead>
        <tbody id='myTable'>
              
        </tbody >
          
      </table>
    </div>
  )
}

export default DoiTacNF6
