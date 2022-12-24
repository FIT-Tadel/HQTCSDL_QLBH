use QLBH
GO

--- KhachHang xem thuc don cua doi tac
DROP PROC IF EXISTS Xem_Thuc_Don
GO
CREATE PROC Xem_Thuc_Don @ma_thuc_don int 
AS
SET TRAN ISOLATION LEVEL REPEATABLE READ
BEGIN TRAN
	BEGIN TRY
		IF(NOT EXISTS(SELECT * FROM THUCDON WHERE MATHUCDON = @ma_thuc_don))
			BEGIN
			Print(N'Thực đơn không tồn tại!')
			ROLLBACK TRAN
			RETURN 1
			END
		IF(NOT EXISTS(SELECT * FROM MONAN WHERE MATHUCDON = @ma_thuc_don AND TINHTRANGMON = N'Còn')) 
			BEGIN
			Print(N'Thực đơn không có món nào Còn!')
			ROLLBACK TRAN
			RETURN 1
			END
		--ĐỂ TEST
		WAITFOR DELAY '0:0:05'

		SELECT TENMON, MOTA, GIA, TINHTRANGMON, DIEMDANHGIA
		FROM MONAN
		WHERE MATHUCDON = @ma_thuc_don AND TINHTRANGMON = N'Còn'

	END TRY
	BEGIN CATCH
		Print('Lỗi khi xem thực đơn!')
		ROLLBACK TRAN 
		RETURN 1
	END CATCH
COMMIT TRAN
RETURN 0
GO

--- DoiTac them 1 mon an vao thuc don
DROP PROC IF EXISTS Them_Mon_An
GO
CREATE PROC Them_Mon_An @ten_mon nvarchar(80), @ma_thuc_don int, @mo_ta nvarchar(50), @gia float, @tinhtrang nvarchar(30), @diemdanhgia int
AS
BEGIN TRAN
	BEGIN TRY
		IF(NOT EXISTS(SELECT * FROM THUCDON WHERE MATHUCDON = @ma_thuc_don))
			BEGIN
			Print(N'Thực đơn không tồn tại!')
			ROLLBACK TRAN
			RETURN 1
			END
		IF(EXISTS(SELECT * FROM MONAN WHERE TENMON = @ten_mon))
			BEGIN
			Print(N'Đã có món ăn này trong thực đơn!')
			ROLLBACK TRAN
			RETURN 1
			END
		IF(@gia <= 0)
			BEGIN
			Print(N'Giá món ăn không phù hợp!')
			ROLLBACK TRAN
			RETURN 1
			END
		BEGIN
		INSERT INTO MONAN VALUES(@ten_mon, @ma_thuc_don, @mo_ta, @gia, @tinhtrang, @diemdanhgia)
		UPDATE THUCDON SET SOLUONGMON = SOLUONGMON + 1 WHERE MATHUCDON = @ma_thuc_don
		END
	END TRY
	BEGIN CATCH
		Print(N'Thêm món ăn không thành công!')
		ROLLBACK TRAN
		RETURN 1
	END CATCH
COMMIT TRAN
RETURN 0
GO