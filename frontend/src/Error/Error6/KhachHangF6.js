import React from 'react'
import $ from 'jquery';
import { useState, useEffect } from 'react';
import apiCaller from '../../utils/apiCaller';

function KhachHangF6() {

  const [list,setList]=useState([])
  const [url,setUrl]=useState('')

  useEffect(()=>{

    apiCaller(url,'PUT',null).then(res=>{
      setList(res.data)
    })

  },[url])

  function Handle(){

    var monan= {list};

    const madh= document.getElementById('madh').value


    const tenmon= document.getElementById('tenmon').value


    const soluong= document.getElementById('soluong').value


    setUrl(`Update_CT_DonHang/${madh}/${tenmon}/${soluong}`)
    console.log(list)

  }


  function HandleLoad(){

    var monan= {list};

    var thongbao = document.getElementById('thongbao')
    thongbao.innerHTML='Thay đổi thất bại'

    const madh= document.getElementById('madh').value
    console.log(madh)
    const tenmonan= document.getElementById('tenmon').value
    console.log(tenmonan)

    setUrl(`ctdonghang/${madh}/${tenmonan}`)
    var monan= {list};
    console.log(monan)
    console.log({url})

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

      <label for="name" className='error-lable'>Nhập số lượng:</label>
      <input type="text" id="soluong" name="soluong" required
       minlength="4" maxlength="8" size="10" className='error-lable'/>
      
      <input type="submit" name="" value="Submit" className='error-lable'  onClick={()=> Handle()}/>

      <input type="submit" name="" value="Load data" className='error-lable' onClick={()=> HandleLoad()}/>

      <p id='thongbao'></p>

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

export default KhachHangF6