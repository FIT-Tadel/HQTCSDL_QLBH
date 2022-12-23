use QLBH

Declare @kq int

Exec @kq = Them_Mon_An N'Beefsteak', 5, N'Ngon rẻ', 35000, N'Đang bán', 9

IF(@kq = 1)
	Print(N'Thêm món thất bại!')
ELSE Print(N'Thêm món thành công!')

-- SELECT * FROM MONAN 
-- SELECT * FROM THUCDON
-- DELETE FROM MONAN WHERE TenMon = N'Beefsteak' UPDATE THUCDON SET SOLUONGMON = SOLUONGMON - 1 WHERE MaThucDon = 5