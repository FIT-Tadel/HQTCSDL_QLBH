import React from 'react'
import $ from 'jquery';
import Items from './item';
export default function KhachHangF1() {
  
  function test(data){
    
    const test= document.getElementById('madh').value
    console.log(test)
    
    var table = document.getElementById('myTable')
    for(var i=0;i<data.length;i++){
      let check = test.localeCompare(data[i].foodName)
      if(check===0){
        var row=`<tr>
                    <td>${data[i].foodName} </td>
                    <td>${data[i].description} </td>
                    <td>${data[i].judge} </td>
                </tr>`
        table.innerHTML+=row
      }
    }

    
  }
  return (
    <div>
      <label for="name" className='error-lable'>Nhập mã đơn hàng:</label>
      <input type="text" id="madh" name="madh" required
       minlength="4" maxlength="30" size="10" className='error-lable'/>

      
      <input type="submit" name="" value="Submit" className='error-lable' onClick={()=> test(Items)}/>

      <table className='table table-striped'>
        <thead>
          <tr className='bg-info'>
            <th>Food name</th>
            <th>Description</th>
            <th>Judge</th>

          </tr>
        </thead>
        <tbody id='myTable'>
              
        </tbody >
          
      </table>
      
    </div>

  )
}

