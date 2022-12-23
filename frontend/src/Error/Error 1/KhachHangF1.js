import React from 'react'
import $ from 'jquery';
import { useState, useEffect } from 'react';
import apiCaller from '../../utils/apiCaller';

export default function KhachHangF1() {
  
  const [list,setList]=useState([])
  const [url,setUrl]=useState('')

  useEffect(()=>{

    apiCaller(url,'PUT',null).then(res=>{
      setList(res.data)
    })

  },[url])

  function Handle(){

    var donhang= {list};
    const madh= document.getElementById('madh').value
    console.log(madh)

    setUrl(`HuyDon_fixed/${madh}`)


  }

  function HandleLoad(){

    var thongbao = document.getElementById('thongbao')
    thongbao.innerHTML='Hủy đơn thất bại'

    var donhang= {list};
    const madh= document.getElementById('madh').value
    console.log(madh)

    setUrl(`donhang/${madh}`)

    console.log(donhang.list[0])
    
    var table = document.getElementById('myTable')
    table.innerHTML=''
    for(var i=0;i<donhang.list.length;i++){
        var row=`<tr>
                    <td>${donhang.list[i].MADH} </td>
                    <td>${donhang.list[i].MADOITAC} </td>
                    <td>${donhang.list[i].MATAIXE} </td>
                    <td>${donhang.list[i].MAKH} </td>
                    <td>${donhang.list[i].TINHTRANG} </td>
                </tr>`
        table.innerHTML+=row
    }
  }
  return (
    <div>
      <label for="name" className='error-lable'>Nhập mã đơn hàng:</label>
      <input type="text" id="madh" name="madh" required
       minlength="4" maxlength="30" size="10" className='error-lable'/>

      
      <input type="submit" name="" value="Submit" className='error-lable' onClick={()=> Handle()}/>
      <input type="submit" name="" value="Load data" className='error-lable' onClick={()=> HandleLoad()}/>
      <p id='thongbao'></p>
      <table className='table table-striped'>
        <thead>
          <tr className='bg-info'>
            <th>MADH</th>
            <th>MADT</th>
            <th>MATAIXE</th>
            <th>MAKH</th>
            <th>TINHTRANG</th>

          </tr>
        </thead>
        <tbody id='myTable'>
              
        </tbody >
          
      </table>
      
    </div>

  )
}

