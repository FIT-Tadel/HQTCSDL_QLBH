import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";

// error 1
import Error1 from './Error/Error 1/Error1';
import Error1NF from './Error/Error 1/Error1NF';
import KhachHangNF from './Error/Error 1/KhachHangNF';
import TaiXeNF from './Error/Error 1/TaiXeNF';

import Error1F from './Error/Error 1/Error1F';
import KhachHangF1 from './Error/Error 1/KhachHangF1';
import TaiXeF1 from './Error/Error 1/TaiXeF1';

//error2
import Error2 from './Error/Error2/Error2';
import Error2NF from './Error/Error2/Error2NF';
import KhachHangNF2 from './Error/Error2/KhachHangNF2';
import DoiTacNF2 from './Error/Error2/DoiTacNF2';

import Error2F from './Error/Error2/Error2F';
import KhachHangF2 from './Error/Error2/KhachHangF2';
import DoiTacF2 from './Error/Error2/DoiTacF2';

//error3
import Error3 from './Error/Error3/Error3';
import Error3NF from './Error/Error3/Error3NF';
import DoiTacNF3 from './Error/Error3/DoiTacNF3';
import KhachHangNF3 from './Error/Error3/KhachHangNF3';

import Error3F from './Error/Error3/Error3F';
import DoiTacF3 from './Error/Error3/DoiTacF3';
import KhachHangF3 from './Error/Error3/KhachHangF3';


//error4
import Error4 from './Error/Error4/Error4';
import Error4NF from './Error/Error4/Error4NF';
import DoiTacNF4 from './Error/Error4/DoiTacNF4';
import TaiXeNF4 from './Error/Error4/TaiXeNF4';

import Error4F from './Error/Error4/Error4F';
import TaiXeF4 from './Error/Error4/TaiXeF4';
import DoiTacF4 from './Error/Error4/DoiTacF4';

//error5
import Error5 from './Error/Error5/Error5';
import Error5NF from './Error/Error5/Error5NF';
import NhanVien1NF5 from './Error/Error5/NhanVien1NF5';
import NhanVien2NF5 from './Error/Error5/NhanVien2NF5';

import Error5F from './Error/Error5/Error5F';
import NhanVien1F5 from './Error/Error5/NhanVien1F5';
import NhanVien2F5 from './Error/Error5/NhanVien2F5';

//error6
import Error6 from './Error/Error6/Error6';
import Error6NF from './Error/Error6/Error6NF';
import DoiTacNF6 from './Error/Error6/DoiTacNF6';
import KhachHangNF6 from './Error/Error6/KhachHangNF6';

import Error6F from './Error/Error6/Error6F';
import DoiTacF6 from './Error/Error6/DoiTacF6';
import KhachHangF6 from './Error/Error6/KhachHangF6';


//error7
import Error7 from './Error/Error7/Error7';
import Error7NF from './Error/Error7/Error7NF';
import KhachHangNF7 from './Error/Error7/KhachHangNF7';
import DoiTacNF7 from './Error/Error7/DoiTacNF7';

import Error7F from './Error/Error7/Error7F';
import KhachHangF7 from './Error/Error7/KhachHangF7';
import DoiTacF7 from './Error/Error7/DoiTacF7';
//error8
import Error8 from './Error/Error8/Error8';
import Error8NF from './Error/Error8/Error8NF';
import TaiXe1NF8 from './Error/Error8/TaiXe1NF8';
import TaiXe2NF8 from './Error/Error8/TaiXe2NF8';

import Error8F from './Error/Error8/Error8F';
import TaiXe1F8 from './Error/Error8/TaiXe1F8';
import TaiXe2F8 from './Error/Error8/TaiXe2F8';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <BrowserRouter>
      <Routes>
          <Route path='/' index element={<App />}/>

          {/* lost update - duy */}
          <Route path='error1' element={<Error1 />}/> 
          <Route path='error1/error1_nf' element={<Error1NF />}/>
          <Route path='error1/error1_nf/user_nf' element={<KhachHangNF />}/>
          <Route path='error1/error1_nf/driver_nf' element={<TaiXeNF />}/>

          <Route path='error1/error1_f' element={<Error1F />}/>
          <Route path='error1/error1_f/user_f' element={<KhachHangF1 />}/>
          <Route path='error1/error1_f/driver_f' element={<TaiXeF1 />}/>

          {/* dirty read - duy */}
          <Route path='error2' element={<Error2 />}/>
          <Route path='error2/error2_nf' element={<Error2NF />}/>
          <Route path='error2/error2_nf/partner_nf' element={<DoiTacNF2 />}/>
          <Route path='error2/error2_nf/user_nf' element={<KhachHangNF2 />}/>

          <Route path='error2/error2_f' element={<Error2F />}/>
          <Route path='error2/error2_f/partner_f' element={<DoiTacF2 />}/>
          <Route path='error2/error2_f/user_f' element={<KhachHangF2 />}/>

          {/* phantom read - dat */}
          <Route path='error3' element={<Error3 />}/>
          <Route path='error3/error3_nf' element={<Error3NF />}/>
          <Route path='error3/error3_nf/partner_nf' element={<DoiTacNF3 />}/>
          <Route path='error3/error3_nf/user_nf' element={<KhachHangNF3 />}/>

          <Route path='error3/error3_f' element={<Error3F />}/>
          <Route path='error3/error3_f/partner_f' element={<DoiTacF3 />}/>
          <Route path='error3/error3_f/user_f' element={<KhachHangF3 />}/>

          {/* circle deadlock - dat */}
          <Route path='error4' element={<Error4 />}/>
          <Route path='error4/error4_nf' element={<Error4NF />}/>
          <Route path='error4/error4_nf/partner_nf' element={<DoiTacNF4 />}/>
          <Route path='error4/error4_nf/driver_nf' element={<TaiXeNF4 />}/>

          <Route path='error4/error4_f' element={<Error4F />}/>
          <Route path='error4/error4_f/partner_f' element={<DoiTacF4 />}/>
          <Route path='error4/error4_f/driver_f' element={<TaiXeF4 />}/>

          {/* conversion deadlock - phuc */}
          <Route path='error5' element={<Error5 />}/>
          <Route path='error5/error5_nf' element={<Error5NF />}/>
          <Route path='error5/error5_nf/worker1_nf' element={<NhanVien1NF5 />}/>
          <Route path='error5/error5_nf/worker2_nf' element={<NhanVien2NF5 />}/>

          <Route path='error5/error5_f' element={<Error5F />}/>
          <Route path='error5/error5_f/worker1_f' element={<NhanVien1F5 />}/>
          <Route path='error5/error5_f/worker2_f' element={<NhanVien2F5 />}/>

          {/* dirty read - phuc */}
          <Route path='error6' element={<Error6 />}/>
          <Route path='error6/error6_nf' element={<Error6NF />}/>
          <Route path='error6/error6_nf/partner_nf' element={<DoiTacNF6 />}/>
          <Route path='error6/error6_nf/user_nf' element={<KhachHangNF6 />}/>

          <Route path='error6/error6_f' element={<Error6F />}/>
          <Route path='error6/error6_f/partner_f' element={<DoiTacF6 />}/>
          <Route path='error6/error6_f/user_f' element={<KhachHangF6 />}/>

          {/* unrepeatable read - long */}
          <Route path='error7' element={<Error7 />}/>
          <Route path='error7/error7_nf' element={<Error7NF />}/>
          <Route path='error7/error7_nf/partner_nf' element={<DoiTacNF7 />}/>
          <Route path='error7/error7_nf/user_nf' element={<KhachHangNF7 />}/>

          <Route path='error7/error7_f' element={<Error7F />}/>
          <Route path='error7/error7_f/partner_f' element={<DoiTacF7 />}/>
          <Route path='error7/error7_f/user_f' element={<KhachHangF7 />}/>


          {/* conservation deadlock - long */}
          <Route path='error8' element={<Error8 />}/>
          <Route path='error8/error8_nf' element={<Error8NF />}/>
          <Route path='error8/error8_nf/driver1_nf' element={<TaiXe1NF8 />}/>
          <Route path='error8/error8_nf/driver2_nf' element={<TaiXe2NF8 />}/>

          <Route path='error8/error8_f' element={<Error8F />}/>
          <Route path='error8/error8_f/driver1_f' element={<TaiXe1F8 />}/>
          <Route path='error8/error8_f/driver2_f' element={<TaiXe2F8 />}/>
      </Routes>
  </BrowserRouter>
  </React.StrictMode>
);


reportWebVitals();
