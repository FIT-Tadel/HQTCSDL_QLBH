import React from 'react'
import $ from 'jquery';
import { useState, useEffect } from 'react';
import apiCaller from '../../utils/apiCaller';

function KhachHangNF3() {
  const [list,setList]=useState([])
  const [url,setUrl]=useState('')
  const [count,setCount]=useState(0)

  useEffect(()=>{

    apiCaller(url,'GET',null).then(res=>{
      setList(res.data)
    })

  },[count])


  function Handle(){

    var monan= {list};

    const matd= document.getElementById('matd').value


    // setUrl(`KH_DangXemTD/${matd}`)
    setUrl(`thucdon/${matd}`)
    setCount(count+1)
    monan= {list};
    console.log(monan)

    var table = document.getElementById('myTable')
    table.innerHTML=''
    for(var i=0;i<monan.list.length;i++){
    var row=`<tr>
                    <td>${monan.list[i].TENMON} </td>
                    <td>${monan.list[i].MOTA} </td>
                    <td>${monan.list[i].GIA} </td>
                    <td>${monan.list[i].TINHTRANGMON} </td>
                    <td>${monan.list[i].DIEMDANHGIA} </td>
                </tr>`
        table.innerHTML+=row
    }
  }


  function LoadHandle(){

    var monan= {list};

    const matd= document.getElementById('matd').value


    // setUrl(`KH_DangXemTD/${matd}`)
    setUrl(`thucdon/${matd}`)
    setCount(count+1)
    monan= {list};
    console.log(monan)

    var table = document.getElementById('myTable')
    table.innerHTML=''
    for(var i=0;i<monan.list.length;i++){
    var row=`<tr>
                    <td>${monan.list[i].TENMON} </td>
                    <td>${monan.list[i].MOTA} </td>
                    <td>${monan.list[i].GIA} </td>
                    <td>${monan.list[i].TINHTRANGMON} </td>
                    <td>${monan.list[i].DIEMDANHGIA} </td>
                </tr>`
        table.innerHTML+=row
    }
  }

  return (
    <div>
      <label for="name" className='error-lable'>Nhập mã thực đơn:</label>
      <input type="text" id="matd" name="matd" required
       minlength="4" maxlength="8" size="10" className='error-lable'/>
      
      <input type="submit" name="" value="Submit" className='error-lable' onClick={()=> Handle()}/>
      <input type="submit" name="" value="Load data" className='error-lable' onClick={()=> LoadHandle()}/>

      <table className='table table-striped'>
        <thead>
          <tr className='bg-info'>
            <th>TEMON</th>
            <th>MOTA</th>
            <th>GIA</th>
            <th>TINHTRANG</th>
            <th>DIEMDANHGIA</th>

          </tr>
        </thead>
        <tbody id='myTable'>
              
        </tbody >
          
      </table>
    </div>
  )
}

export default KhachHangNF3