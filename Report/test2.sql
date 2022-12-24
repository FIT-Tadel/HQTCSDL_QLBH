use QLBH
go

Declare @kq int

Exec @kq = Them_Mon_An N'Mì xào bò', 10, N'Mì,bò,salad', 35000, N'Còn',4

IF(@kq = 1)
	Print(N'Thêm món thất bại!')
ELSE Print(N'Thêm món thành công!')

-- SELECT * FROM MONAN SELECT * FROM THUCDON
-- DELETE FROM MONAN WHERE TenMon = N'Mì xào bò' UPDATE THUCDON SET SOLUONGMON = SOLUONGMON - 1 WHERE MaThucDon = 10
-- DELETE FROM MONAN WHERE TenMon = N'Beefsteak'


--deadlock
Declare @kq int
Exec @kq = TX_NhanDon_XemTTCH 'SE617257', 'X7P-1B8'

IF(@kq = 1)
	Print(N'Thao tác thất bại!')
ELSE Print(N'Thao tác thành công!')

-- UPDATE DONHANG SET TINHTRANG = N'Chờ nhận', MATAIXE = NULL WHERE MADH = 'SE617257'
-- SELECT* FROM DONHANG
-- SELECT * FROM CUAHANG


SELECT * FROM MONAN WHERE MATHUCDON =10

select * from CT_DONHANG where MADH='asdf' and TENMON=''