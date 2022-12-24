import React from 'react'
import $ from 'jquery';
import { useState, useEffect } from 'react';
import apiCaller from '../../utils/apiCaller';

function DoiTacF3() {
  const [list,setList]=useState([])
  const [url,setUrl]=useState('')
  const [count,setCount]=useState(0)
  const [update,setUpdate]=useState('')

  useEffect(()=>{

    apiCaller(url,'POST',update).then(res=>{
      setList(res.data)
    })

  },[count])

  function Handle(){


    var thongbao = document.getElementById('thongbao')
    thongbao.innerHTML='Thêm món thành công'


    const matd= document.getElementById('matd').value


    const tenmon= document.getElementById('tenmon').value


    const mota= document.getElementById('mota').value

    const gia= document.getElementById('gia').value

    const tinhtrang= document.getElementById('tinhtrang').value

    const diem = 9

    var ctmon={
      "TENMON" : 'Mì xào bò',
      "MATHUCDON": 10,
      "MOTA": "Ngon rẻ",
      "GIA" : 45000,
      "TINHTRANGMON" :  'Còn',
      "DIEMDANHGIA" : 9 
  }

  setUpdate(ctmon)
  setCount(count+1)


    setUrl(`ThemMonAn`)


  }


  return (

    <div>

      <label for="name" className='error-lable'>Nhập tên món ăn:</label>
      <input type="text" id="tenmon" name="tenmon" required
       minlength="4" maxlength="8" size="10" className='error-lable'/>

      <label for="name" className='error-lable'>Nhập mã thực đơn:</label>
      <input type="text" id="matd" name="matd" required
       minlength="4" maxlength="8" size="10" className='error-lable'/>

      <label for="name" className='error-lable'>Nhập mô tả món ăn:</label>
      <input type="text" id="mota" name="mota" required
       minlength="4" maxlength="50" size="10" className='error-lable'/>

      <label for="name" className='error-lable'>Nhập giá món ăn:</label>
      <input type="text" id="gia" name="gia" required
       minlength="4" maxlength="10" size="10" className='error-lable'/>

      <label for="name" className='error-lable'>Nhập tình trạng món ăn:</label>
      <input type="text" id="tinhtrang" name="tinhtrang" required
       minlength="4" maxlength="30" size="10" className='error-lable'/>
      
      <input type="submit" name="" value="Submit" className='error-lable' onClick={()=> Handle()}/>

      <p id='thongbao'></p>
    </div>

  )
}

export default DoiTacF3