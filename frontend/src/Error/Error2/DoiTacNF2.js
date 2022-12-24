import React from 'react'
import $ from 'jquery';
import { useState, useEffect } from 'react';
import apiCaller from '../../utils/apiCaller';

function DoiTacNF2() {

  const [list,setList]=useState([])
  const [url,setUrl]=useState('')

  useEffect(()=>{

    apiCaller(url,'PUT',null).then(res=>{
      setList(res.data)
    })

  },[url])

  function Handle(){

    var monan= {list};

    const matd= document.getElementById('matd').value


    const tenmon= document.getElementById('tenmon').value


    const gia= document.getElementById('gia').value


    setUrl(`DTUpdateTD/${matd}/${tenmon}/${gia}`)

  }

  function HandleLoad(){

    var monan= {list};

    var thongbao = document.getElementById('thongbao')
    thongbao.innerHTML='Thay đổi thất bại'

    const tenmonan= document.getElementById('tenmon').value
    console.log(tenmonan)

    setUrl(`MonAn/${tenmonan}`)
    var monan= {list};

    var table = document.getElementById('myTable')
    table.innerHTML=''
    var row=`<tr>
                    <td>${monan.list[0].TENMON} </td>
                    <td>${monan.list[0].MATHUCDON} </td>
                    <td>${monan.list[0].MOTA} </td>
                    <td>${monan.list[0].GIA} </td>
                    <td>${monan.list[0].TINHTRANG} </td>
                </tr>`
        table.innerHTML+=row

  }

  return (
    <div>
      <label for="name" className='error-lable'>Nhập mã thực đơn:</label>
      <input type="text" id="matd" name="matd" required
       minlength="4" maxlength="8" size="10" className='error-lable'/>

      <label for="name" className='error-lable'>Nhập tên món ăn:</label>
      <input type="text" id="tenmon" name="tenmon" required
       minlength="4" maxlength="50" size="10" className='error-lable'/>

      <label for="name" className='error-lable'>Giá:</label>
      <input type="text" id="gia" name="gia" required
       minlength="4" maxlength="8" size="10" className='error-lable'/>
      
      <input type="submit" name="" value="Submit" className='error-lable'  onClick={()=> Handle()}/>

      <input type="submit" name="" value="Load data" className='error-lable' onClick={()=> HandleLoad()}/>

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

export default DoiTacNF2