import React from 'react'

function DoiTacNF3() {
  const [list,setList]=useState([])
  const [url,setUrl]=useState('')

  useEffect(()=>{

    apiCaller(url,'POST',null).then(res=>{
      setList(res.data)
    })

  },[url])

  function Handle(){

    var thongbao = document.getElementById('thongbao')
    thongbao.innerHTML='Thêm món thành công'

    var monan= {list};

    const matd= document.getElementById('matd').value


    const tenmon= document.getElementById('tenmon').value


    const mota= document.getElementById('mota').value

    const gia= document.getElementById('gia').value

    const tinhtrang= document.getElementById('tinhtrang').value


    setUrl(`ThemMonAn/${matd}/${tenmon}/${gia}`)

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
      
      <input type="submit" name="" value="Submit" className='error-lable'/>

      <p id='thongbao'></p>
    </div>

  )
}

export default DoiTacNF3