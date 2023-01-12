import React from 'react'
import { useState, useEffect } from 'react';
import apiCaller from '../../utils/apiCaller';

function TaiXeNF4() {
  const [list,setList]=useState([])
  const [url,setUrl]=useState('')

  useEffect(()=>{

    apiCaller(url,'PUT',null).then(res=>{
      setList(res.data)
    })

  },[url])

  function Handle(){
    var cuahang= {list};
    const madh= document.getElementById('madh').value

    const mataixe= document.getElementById('mataixe').value
   
    setUrl(`TX_NhanDon_XemTTCH/${madh}/${mataixe}`)
    
    var table = document.getElementById('myTable')
    table.innerHTML=''
    for(var i=0;i< cuahang.list.length;i++){
        var row=`<tr>
                    <td>${cuahang.list[i].TENQUAN} </td>
                    <td>${cuahang.list[i].NGUOIDAIDIEN} </td>
                    <td>${cuahang.list[i].DIACHI} </td>
                    <td>${cuahang.list[i].THOIGIANHD} </td>
                    <td>${cuahang.list[i].TINHTRANG} </td>
                </tr>`
        table.innerHTML+=row
    }
  }
  return (
    <div>
      <label for="name" className='error-lable'>Nhập mã đơn hàng:</label>
      <input type="text" id="madh" name="madh" required
       minlength="4" maxlength="30" size="10" className='error-lable'/>

      <label for="name" className='error-lable'>Nhập mã tài xế:</label>
      <input type="text" id="mataixe" name="mataixe" required
       minlength="4" maxlength="30" size="10" className='error-lable'/>
      
      <input type="submit" name="" value="Submit" className='error-lable' onClick={() => Handle()} />

      <table className='table table-striped'>
        <thead>
          <tr className='bg-info'>
            <th>TENQUAN</th>
            <th>NGUOIDAIDIEN</th>
            <th>DIACHI</th>
            <th>THOIGIANHD</th>
            <th>TINHTRANG</th>
          </tr>
        </thead>
        <tbody id='myTable'>
              
        </tbody >
          
      </table>
    </div>
  )
}

export default TaiXeNF4