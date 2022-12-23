use QLBH
go

-- Declare @kq int

-- Exec @kq = Them_Mon_An N'Mì xào bò', 10, N'Mì,bò,salad', 35000, N'Đang bán'

-- IF(@kq = 1)
-- 	Print(N'Thêm món thất bại!')
-- ELSE Print(N'Thêm món thành công!')

-- SELECT * FROM MONAN SELECT * FROM THUCDON
-- DELETE FROM MONAN WHERE TenMon = N'Mì xào bò' UPDATE THUCDON SET SOLUONGMON = SOLUONGMON - 1 WHERE MaThucDon = 10

Declare @kq int

Exec @kq = Them_Mon_An_fixed N'Mì xào bò', 10, N'Mì,bò,salad', 35000, N'Đang bán'

IF(@kq = 1)
	Print(N'Thêm món thất bại!')
ELSE Print(N'Thêm món thành công!')

