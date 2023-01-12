use QLBH

Declare @kq int

Exec @kq = DT_CapNhatCH_DonHang_Fixed 'SE617257', 'B8K9W7', N'Hoạt động', N'Chờ nhận'

IF(@kq = 1)
	Print(N'Thao tác thất bại!')
ELSE Print(N'Thao tác thành công!')

-- UPDATE CUAHANG SET TINHTRANG = N'Đóng cửa' WHERE MACHINHANH = 'B8K9W7'
