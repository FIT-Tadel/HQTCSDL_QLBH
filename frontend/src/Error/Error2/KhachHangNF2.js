import React from 'react'
import $ from 'jquery';
import { useState, useEffect } from 'react';
import apiCaller from '../../utils/apiCaller';

function KhachHangNF2() {

  const [list,setList]=useState([])
  const [url,setUrl]=useState('')
  const [count,setCount]=useState(0)

  useEffect(()=>{

    apiCaller(url,'GET',null).then(res=>{
      setList(res.data);
    })

  },[count])

  function Handle(){

    setCount(count+1)

    const madt= document.getElementById('madt').value
    const matd= document.getElementById('matd').value


    setUrl(`KH_XemTD_error/${madt}/${matd}`)


    var monan= {list};
    console.log({list})

    var table = document.getElementById('myTable')
    table.innerHTML=''
    for(var i=0;i<monan.list.length;i++){
   
        var row=`<tr>
                    <td>${monan.list[i].TENMON} </td>
                    <td>${monan.list[i].MATHUCDON} </td>
                    <td>${monan.list[i].MOTA} </td>
                    <td>${monan.list[i].GIA} </td>
                    <td>${monan.list[i].TINHTRANG} </td>
                </tr>`
        table.innerHTML+=row
    }

  }


  return (
    <div>
      <label for="name" className='error-lable'>Nhập mã đối tác:</label>
      <input type="text" id="madt" name="madt" required
       minlength="4" maxlength="8" size="10" className='error-lable'/>

      <label for="name" className='error-lable'>Nhập mã thực đơn:</label>
      <input type="text" id="matd" name="matd" required
       minlength="4" maxlength="8" size="10" className='error-lable'/>
      
      <input type="submit" name="" value="Submit" className='error-lable' onClick={()=> Handle()}/>

      <p id='thongbao'></p>

      <table className='table table-striped'>
        <thead>
          <tr className='bg-info'>
            <th>TEMON</th>
            <th>MATHUCDON</th>
            <th>MOTA</th>
            <th>GIA</th>
            <th>TINHTRANG</th>

          </tr>
        </thead>
        <tbody id='myTable'>
              
        </tbody >
          
      </table>
      
    </div>
  )
}

export default KhachHangNF2