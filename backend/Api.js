var Db  = require('./dbOperations');
var MonAn = require('./MonAn');
const dboperations = require('./dbOperations');

var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var app = express();
var router = express.Router();




app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use('/api', router);


//Server
var port = process.env.PORT || 8090;
app.listen(port);
console.log('Order API is runnning at ' + port);


//Router
router.use((request,response,next)=>{
   console.log('middleware');
   next();
})

router.route('/DSMonAn').get((request,response)=>{

    dboperations.getDSMonAn().then(result => {
       response.json(result[0]);
    })

})

router.route('/ctdonghang/:madh/:tenmon').put((request,response)=>{

   dboperations.getCTDonHang(request.params.madh,request.params.tenmon).then(result => {
      response.json(result[0]);
   })
})

router.route('/donhang/:madh').get((request,response)=>{

   dboperations.getDonHang(request.params.madh).then(result => {
      response.json(result[0]);
   })

})

router.route('/thucdon/:matd').get((request,response)=>{

   dboperations.getMonAnThucDon(request.params.matd).then(result => {
      response.json(result[0]);
   })

})

router.route('/MonAn/:tenmon').put((request,response)=>{

    dboperations.getMonAn(request.params.tenmon).then(result => {
       response.json(result[0]);
    })

})


//Lỗi 1 - Lost Update
router.route('/TXNhanDon_error/:maTX/:maDH').put((request,response)=>{
   dboperations.TX_NhanDon_error(request.params.maTX, request.params.maDH).then(result => {
      response.json(result[0]);
   })
})

router.route('/HuyDon_error/:maDH').put((request,response)=>{
   dboperations.KH_HuyDon_error(request.params.maDH).then(result => {
      response.json(result[0]);
   })
})

router.route('/TXNhanDon_fixed/:maTX/:maDH').put((request,response)=>{
   dboperations.TX_NhanDon_fixed(request.params.maTX, request.params.maDH).then(result => {
      response.json(result[0]);
   })
})

router.route('/HuyDon_fixed/:maDH').put((request,response)=>{
   dboperations.KH_HuyDon_fixed(request.params.maDH).then(result => {
      response.json(result[0]);
   })
})


//Lỗi 2 - Dirty Read
router.route('/DTUpdateTD/:mathucdon/:tenmon/:gia').put((request,response)=>{
   dboperations.DT_UpdateThucDon(request.params.mathucdon, request.params.tenmon, request.params.gia).then(result => {
      response.json(result);
   })
})

router.route('/KH_XemTD_error/:madoitac/:mathucdon').get((request,response)=> {

   dboperations.KH_XemThucDon_DT_error(request.params.madoitac, request.params.mathucdon).then(result => {
      response.json(result[0]);
   })
})

router.route('/KH_XemTD_fixed/:madoitac/:mathucdon').get((request,response)=> {

   dboperations.KH_XemThucDon_DT_fixed(request.params.madoitac, request.params.mathucdon).then(result => {
      response.json(result[0]);
   })
})


//Lỗi 3 - Phantom Read
router.route('/KH_DangXemTD/:mathucdon').get((request,response)=>{
   dboperations.KH_DangXemThucDon(request.params.mathucdon).then(result => {
      response.json(result[0]);
   })
})

router.route('/KH_DangXemTD_fixed/:mathucdon').get((request,response)=> {

   dboperations.KH_DangXemThucDon_fixed(request.params.mathucdon).then(result => {
      response.json(result[0]);
   })
})

router.route('/ThemMonAn').post((request,response)=> {

   MonAn = {...request.body}

   dboperations.DT_ThemMonAn(MonAn).then(result => {
      response.json(result[0]);
   })
})


//Lỗi 4 - Cycle Deadlock
router.route('/DT_CapNhat_CH_DH/:maDH/:machinhanh/:tinhtrangCH/:tinhtrangDH').put((request,response)=> {

   dboperations.DT_CapNhat_CH_DH(
      request.params.maDH, request.params.machinhanh, request.params.tinhtrangCH, request.params.tinhtrangDH).then(result => {
      if(result === undefined)
         response.json("Cập nhật thất bại!");
      else response.json("Cập nhật thành công!");
   })
})

router.route('/DT_CapNhat_CH_DH_fixed/:maDH/:machinhanh/:tinhtrangCH/:tinhtrangDH').put((request,response)=> {

   dboperations.DT_CapNhat_CH_DH_fixed(
      request.params.maDH, request.params.machinhanh, request.params.tinhtrangCH, request.params.tinhtrangDH).then(result => {
      if(result === undefined)
         response.json("Cập nhật thất bại!");
      else response.json("Cập nhật thành công!");
   })
})

router.route('/TX_NhanDon_XemTTCH/:maDH/:mataixe').put((request,response)=> {

   dboperations.TX_NhanDon_XemTTCH(request.params.maDH, request.params.mataixe).then(result => {
      if(result[0].length === 0)
         response.json("Nhận đơn thành công! Không tìm thấy cửa hàng nào đang hoạt động ở khu vực bạn!")
      else response.json(result[0]);
   })
})


//Lỗi 5 - Unrepeatable Read
router.route('/KH_Xem_MonAn/:mathucdon/:tenmon').get((request,response)=> {

   dboperations.KH_Xem_MonAn(request.params.mathucdon, request.params.tenmon).then(result => {
      if(result[0].length === 0)
         response.json("Món ăn không tồn tại trong thực đơn!")
      else response.json(result[0]);
   })
})

router.route('/KH_Xem_MonAn_fixed/:mathucdon/:tenmon').get((request,response)=> {

   dboperations.KH_Xem_MonAn_fixed(request.params.mathucdon, request.params.tenmon).then(result => {
      if(result[0].length === 0)
         response.json("Món ăn không tồn tại trong thực đơn!")
      else response.json(result[0]);
   })
})

router.route('/Xoa_Mon_An/:mathucdon/:tenmon').delete((request,response)=> {

   dboperations.CuaHang_Xoa_MonAn(request.params.mathucdon, request.params.tenmon).then(result => {
      if(result === undefined)
         response.json("Xóa món ăn thất bại!");
      else response.json("Xóa món ăn thành công!");
   })
})


//Lỗi 6 - Conversion Deadlock
router.route('/Update_TT_Mon/:tenmon/:mathucdon/:trangthai').put((request,response)=> {

   dboperations.Update_TrangThai_Mon(request.params.tenmon, request.params.mathucdon, request.params.trangthai).then(result => {
      if(result === undefined)
         response.json("Đang có nhân viên khác cập nhật tình trạng món ăn này!")
      else response.json(result[0]);
   })
})

router.route('/Update_TT_Mon_fixed/:tenmon/:mathucdon/:trangthai').put((request,response)=> {

   dboperations.Update_TrangThai_Mon_fixed(request.params.tenmon, request.params.mathucdon, request.params.trangthai).then(result => {
      response.json(result[0]);
   })
})



//Lỗi 7 - Dirty Read
router.route('/Xem_CT_DonHang/:maDH/:tenmon').get((request,response)=> {

   dboperations.Xem_CT_DonHang(request.params.maDH, request.params.tenmon).then(result => {
      response.json(result[0]);
   })
})

router.route('/Xem_CT_DonHang_fixed/:maDH/:tenmon').get((request,response)=> {

   dboperations.Xem_CT_DonHang_fixed(request.params.maDH, request.params.tenmon).then(result => {
      response.json(result[0]);
   })
})

router.route('/Update_CT_DonHang/:maDH/:tenmon/:soluong').put((request,response)=> {

   dboperations.Update_CT_DonHang(request.params.maDH, request.params.tenmon, request.params.soluong).then(result => {
      response.json(result[0]);
   })
})


//Lỗi 8 - Conversion Deadlock
router.route('/TX_Nhan_DonHang/:mataixe/:maDH').put((request,response)=> {

   dboperations.TX_Nhan_DonHang(request.params.mataixe, request.params.maDH).then(result => {
      if(result === undefined)
         response.json("Đơn hàng đã có tài xế khác tiếp nhận!")
      else response.json(result[0]);
   })
})

router.route('/TX_Nhan_DonHang_fixed/:mataixe/:maDH').put((request,response)=> {

   dboperations.TX_Nhan_DonHang_fixed(request.params.mataixe, request.params.maDH).then(result => {
      if(result === undefined)
         response.json("Đơn hàng đã có tài xế khác tiếp nhận!")
      else response.json(result[0]);
   })
})