var config = require('./dbConfig');
const sql = require('mssql');


//Additional function
async function getDSMonAn() {
    try {
        let pool = await sql.connect(config);
        let products = await pool.request().query("SELECT * from MONAN");
        return products.recordsets;
    }
    catch (error) {
        console.log(error);
    }
}

async function getMonAn(tenmon) {
    try {
        let pool = await sql.connect(config);
        let product = await pool.request()
            .input('input_parameter', sql.NVarChar, tenmon)
            .query("SELECT * from MONAN where TENMON = @input_parameter");
        return product.recordsets;
    }
    catch (error) {
        console.log(error);
    }
}

async function getDonHang(maDH) {
    try {
        let pool = await sql.connect(config);
        let product = await pool.request()
            .input('maDH', sql.Char, maDH)
            .query("SELECT * FROM DONHANG WHERE MADH = @maDH");
        return product.recordsets;
    }
    catch (error) {
        console.log(error);
    }
}

async function getMonAnThucDon(maTD) {
    try {
        let pool = await sql.connect(config);
        let product = await pool.request()
            .input('maTD', sql.Char, maTD)
            .query("SELECT * FROM MONAN WHERE MATHUCDON = @maTD");
        return product.recordsets;
    }
    catch (error) {
        console.log(error);
    }
}


async function getCTDonHang(maDH, tenmon) {
    try {
        let pool = await sql.connect(config);
        let product = await pool.request()
            .input('maDH', sql.Char, maDH)
            .input('tenmon', sql.NVarChar, tenmon)
            .query("select * from CT_DONHANG where MADH=@maDH and TENMON=@tenmon");
        return product.recordsets;
    }
    catch (error) {
        console.log(error);
    }
}

// ============= TranhChap ==================
//Lỗi 1 - Lost Update
async function TX_NhanDon_error(maTX, maDH) {

    try {
        let pool = await sql.connect(config);
        let result = await pool.request()
            .input('mataixe', sql.Char, maTX)
            .input('madh', sql.Char, maDH)
            .execute('taixe_update_tinhtrang_donhang_error');
        return getDonHang(maDH);
    }
    catch (err) {
        console.log(err);
    }
}

async function KH_HuyDon_error(maDH) {

    try {
        let pool = await sql.connect(config);
        let result = await pool.request()
            .input('madh', sql.Char, maDH)
            .execute('kh_huy_don_hang_error');
        return getDonHang(maDH);
    }
    catch (err) {
        console.log(err);
    }
}

async function TX_NhanDon_fixed(maTX, maDH) {

    try {
        let pool = await sql.connect(config);
        let result = await pool.request()
            .input('mataixe', sql.Char, maTX)
            .input('madh', sql.Char, maDH)
            .execute('taixe_update_tinhtrang_donhang');
        return getDonHang(maDH);
    }
    catch (err) {
        console.log(err);
    }
}

async function KH_HuyDon_fixed(maDH) {

    try {
        let pool = await sql.connect(config);
        let result = await pool.request()
            .input('madh', sql.Char, maDH)
            .execute('kh_huy_don_hang');
        return getDonHang(maDH);
    }
    catch (err) {
        console.log(err);
    }
}

//Lỗi 2 - Dirty Read
async function DT_UpdateThucDon(mathucdon, tenmon, gia) {

    try {
        let pool = await sql.connect(config);
        let result = await pool.request()
            .input('mathucdon', sql.Int, mathucdon)
            .input('TENMON', sql.NVarChar, tenmon)
            .input('gia', sql.Float, gia)
            .execute('doitac_update_thucdon_monan');
        return result.recordsets;
    }
    catch (err) {
        console.log(err);
    }
}

async function KH_XemThucDon_DT_error(madoitac, mathucdon) {

    try {
        let pool = await sql.connect(config);
        let result = await pool.request()
            .input('madoitac', sql.Char, madoitac)
            .input('mathucdon', sql.Int, mathucdon)
            .execute('kh_xem_doi_tac_error');
        return result.recordsets;
    }
    catch (err) {
        console.log(err);
    }
}

async function KH_XemThucDon_DT_fixed(madoitac, mathucdon) {

    try {
        let pool = await sql.connect(config);
        let result = await pool.request()
            .input('madoitac', sql.Char, madoitac)
            .input('mathucdon', sql.Int, mathucdon)
            .execute('kh_xem_doi_tac');
        return result.recordsets;
    }
    catch (err) {
        console.log(err);
    }
}

//Lỗi 3 - Phantom Read
async function KH_DangXemThucDon(mathucdon) {

    try {
        let pool = await sql.connect(config);
        let result = await pool.request()
            .input('ma_thuc_don', sql.Int, mathucdon)
            .execute('Xem_Thuc_Don');
        return result.recordsets;
    }
    catch (err) {
        console.log(err);
    }
}

async function KH_DangXemThucDon_fixed(mathucdon) {

    try {
        let pool = await sql.connect(config);
        let result = await pool.request()
            .input('ma_thuc_don', sql.Int, mathucdon)
            .execute('Xem_Thuc_Don_Fixed');
        return result.recordsets;
    }
    catch (err) {
        console.log(err);
    }
}

async function DT_ThemMonAn(monan) {

    try {
        let pool = await sql.connect(config);
        let insertMonAn = await pool.request()
            .input('ten_mon', sql.NVarChar, monan.TENMON)
            .input('ma_thuc_don', sql.Int, monan.MATHUCDON)
            .input('mo_ta', sql.NVarChar, monan.MOTA)
            .input('gia', sql.Float, monan.GIA)
            .input('tinhtrang', sql.NVarChar, monan.TINHTRANGMON)
            .input('diemdanhgia', sql.Int, monan.DIEMDANHGIA)
            .execute('Them_Mon_An');
        return getMonAn(monan.TENMON);
    }
    catch (err) {
        console.log(err);
    }
}

//Lỗi 4 - Cycle Deadlock
async function DT_CapNhat_CH_DH(maDH, ma_chi_nhanh, tinhtrang_CH, tinhtrang_DH) {

    try {
        let pool = await sql.connect(config);
        let result = await pool.request()
            .input('maDH', sql.Char, maDH)
            .input('ma_chi_nhanh', sql.Char, ma_chi_nhanh)
            .input('tinhtrang_CH', sql.NVarChar, tinhtrang_CH)
            .input('tinhtrang_DH', sql.NVarChar, tinhtrang_DH)
            .execute('DT_CapNhatCH_DonHang');
        return result.recordsets;
    }
    catch (err) {
        console.log(err);
    }
}

async function DT_CapNhat_CH_DH_fixed(maDH, machinhanh, tinhtrangCH, tinhtrangDH) {

    try {
        let pool = await sql.connect(config);
        let result = await pool.request()
            .input('maDH', sql.Char, maDH)
            .input('ma_chi_nhanh', sql.Char, machinhanh)
            .input('tinhtrang_CH', sql.NVarChar, tinhtrangCH)
            .input('tinhtrang_DH', sql.NVarChar, tinhtrangDH)
            .execute('DT_CapNhatCH_DonHang_Fixed');
        return result.recordsets;
    }
    catch (err) {
        console.log(err);
    }
}

async function TX_NhanDon_XemTTCH(maDH, mataixe) {

    try {
        let pool = await sql.connect(config);
        let result = await pool.request()
            .input('maDH', sql.Char, maDH)
            .input('ma_tai_xe', sql.Char, mataixe)
            .execute('TX_NhanDon_XemTTCH');
        return result.recordsets;
    }
    catch (err) {
        console.log(err);
    }
}

//Lỗi 5 - Unrepeatable Read
async function KH_Xem_MonAn(mathucdon, tenmon) {

    try {
        let pool = await sql.connect(config);
        let result = await pool.request()
            .input('matd', sql.Int, mathucdon)
            .input('tenmon', sql.NVarChar, tenmon)
            .execute('Coi_Mon_An');
        return result.recordsets;
    }
    catch (err) {
        console.log(err);
    }
}

async function KH_Xem_MonAn_fixed(mathucdon, tenmon) {

    try {
        let pool = await sql.connect(config);
        let result = await pool.request()
            .input('matd', sql.Int, mathucdon)
            .input('tenmon', sql.NVarChar, tenmon)
            .execute('Coi_Mon_An_Fixed');
        return result.recordsets;
    }
    catch (err) {
        console.log(err);
    }
}

async function CuaHang_Xoa_MonAn(mathucdon, tenmon) {

    try {
        let pool = await sql.connect(config);
        let result = await pool.request()
            .input('matd', sql.Int, mathucdon)
            .input('tenmon', sql.NVarChar, tenmon)
            .execute('Xoa_Mon_An');
        return result.recordsets;
    }
    catch (err) {
        console.log(err);
    }
}


//Lỗi 6 - Conversion Deadlock
async function Update_TrangThai_Mon(tenmon, mathucdon, trangthai) {
    try {
        let pool = await sql.connect(config);
        let product = await pool.request()
            .input('tenmon', sql.NVarChar, tenmon)
            .input('matd', sql.Int, mathucdon)
            .input('tt', sql.NVarChar, trangthai)
            .execute('CAP_NHAT_TT_MONAN');
        return getMonAn(tenmon);
    }
    catch (error) {
        console.log(error);
    }
}

async function Update_TrangThai_Mon_fixed(tenmon, mathucdon, trangthai) {
    try {
        let pool = await sql.connect(config);
        let product = await pool.request()
            .input('tenmon', sql.NVarChar, tenmon)
            .input('matd', sql.Int, mathucdon)
            .input('tt', sql.NVarChar, trangthai)
            .execute('CAP_NHAT_TT_MONAN_Fixed');
        return getMonAn(tenmon);
    }
    catch (error) {
        console.log(error);
    }
}

//Lỗi 7 - Dirty Read
async function Xem_CT_DonHang(maDH, tenmon) {
    try {
        let pool = await sql.connect(config);
        let product = await pool.request()
            .input('madh', sql.Char, maDH)
            .input('tm', sql.NVarChar, tenmon)
            .execute('DOC_CT_DH');
        return product.recordsets;
    }
    catch (error) {
        console.log(error);
    }
}

async function Xem_CT_DonHang_fixed(maDH, tenmon) {
    try {
        let pool = await sql.connect(config);
        let product = await pool.request()
            .input('madh', sql.Char, maDH)
            .input('tm', sql.NVarChar, tenmon)
            .execute('DOC_CT_DH_Fixed');
        return product.recordsets;
    }
    catch (error) {
        console.log(error);
    }
}

async function Update_CT_DonHang(maDH, tenmon, soluong) {

    try {
        let pool = await sql.connect(config);
        let result = await pool.request()
            .input('madh', sql.Char, maDH)
            .input('tm', sql.NVarChar, tenmon)
            .input('sl', sql.Int, soluong)
            .input('check', sql.Int, 1)
            .execute('CAP_NHAT_CT_DON_HANG');
        return Xem_CT_DonHang(maDH, tenmon);
    }
    catch (err) {
        console.log(err);
    }
}


//Lỗi 8 - Conversion Deadlock
async function TX_Nhan_DonHang(mataixe, maDH) {

    try {
        let pool = await sql.connect(config);
        let result = await pool.request()
            .input('ma_tai_xe', sql.Char, mataixe)
            .input('ma_DH', sql.Char, maDH)
            .execute('TX_Nhan_DonHang');
        return result.recordsets;
    }
    catch (err) {
        console.log(err);
        return Error.Message
    }
}

async function TX_Nhan_DonHang_fixed(mataixe, maDH) {

    try {
        let pool = await sql.connect(config);
        let result = await pool.request()
            .input('ma_tai_xe', sql.Char, mataixe)
            .input('ma_DH', sql.Char, maDH)
            .execute('TX_Nhan_DonHang_Fixed');
        return result.recordsets;
    }
    catch (err) {
        console.log(err);
    }
}



module.exports = {
    getCTDonHang : getCTDonHang,
    getMonAnThucDon: getMonAnThucDon,
    getDSMonAn: getDSMonAn,
    getMonAn : getMonAn,
    getDonHang: getDonHang,

    TX_NhanDon_error : TX_NhanDon_error,
    KH_HuyDon_error : KH_HuyDon_error, 
    TX_NhanDon_fixed : TX_NhanDon_fixed,
    KH_HuyDon_fixed : KH_HuyDon_fixed,

    DT_UpdateThucDon: DT_UpdateThucDon,
    KH_XemThucDon_DT_error: KH_XemThucDon_DT_error,
    KH_XemThucDon_DT_fixed: KH_XemThucDon_DT_fixed,
    
    KH_DangXemThucDon: KH_DangXemThucDon,
    KH_DangXemThucDon_fixed: KH_DangXemThucDon_fixed,
    DT_ThemMonAn: DT_ThemMonAn,

    DT_CapNhat_CH_DH: DT_CapNhat_CH_DH,
    DT_CapNhat_CH_DH_fixed: DT_CapNhat_CH_DH_fixed,
    TX_NhanDon_XemTTCH: TX_NhanDon_XemTTCH,

    KH_Xem_MonAn: KH_Xem_MonAn,
    KH_Xem_MonAn_fixed: KH_Xem_MonAn_fixed,
    CuaHang_Xoa_MonAn: CuaHang_Xoa_MonAn,

    Update_TrangThai_Mon: Update_TrangThai_Mon,
    Update_TrangThai_Mon_fixed: Update_TrangThai_Mon_fixed,

    Xem_CT_DonHang: Xem_CT_DonHang,
    Xem_CT_DonHang_fixed: Xem_CT_DonHang_fixed,
    Update_CT_DonHang: Update_CT_DonHang,

    TX_Nhan_DonHang: TX_Nhan_DonHang,
    TX_Nhan_DonHang_fixed: TX_Nhan_DonHang_fixed
}