use QLBH

Declare @kq int
Exec @kq = TX_NhanDon_XemTTCH 'SE617257', 'X7P-1B8'

IF(@kq = 1)
	Print(N'Thao tác thất bại!')
ELSE Print(N'Thao tác thành công!')

-- UPDATE DONHANG SET TINHTRANG = N'Chờ nhận', MATAIXE = NULL WHERE MADH = 'SE617257'
-- SELECT* FROM DONHANG
-- SELECT * FROM CUAHANG

