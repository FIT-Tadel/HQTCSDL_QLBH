use QLBH
GO

--Giao tác 1: Khách hàng đọc món ăn
DROP PROC IF EXISTS Coi_Mon_An
GO
Create procedure Coi_Mon_An	
@matd int,
@tenmon nvarchar(80)
As
	BEGIN TRAN
		BEGIN TRY			
			IF NOT EXISTS (SELECT * 
						   FROM THUCDON
						   WHERE MATHUCDON = @matd)
				BEGIN
					RAISERROR('THUC DON KHONG TON TAI',16,1)
					ROLLBACK TRAN
				END

			WAITFOR DELAY '0:0:05'
		END TRY

		BEGIN CATCH
			RAISERROR('KHONG DOC DUOC',16,1)
			ROLLBACK TRAN
		END CATCH 

		BEGIN
			SELECT *
			FROM MONAN
			WHERE MATHUCDON = @matd AND TENMON = @tenmon
		END
	COMMIT TRAN
GO

-- CuaHang Xoa Mon An khi khach dang coi mon
DROP PROC IF EXISTS Xoa_Mon_An
GO
Create procedure Xoa_Mon_An
@matd int,
@tenmon nvarchar(80)
AS
	BEGIN  TRAN
		BEGIN TRY
			IF NOT EXISTS (SELECT * 
						   FROM THUCDON
						   WHERE MATHUCDON = @matd)
			BEGIN
				RAISERROR('THUC DON KHONG TON TAI',16,1)
				ROLLBACK TRAN
			END
		END TRY

		BEGIN CATCH
			RAISERROR('KHONG XOA DUOC',16,1)
			ROLLBACK TRAN
		END CATCH

		BEGIN 
			
			IF EXISTS (SELECT *
					   FROM TUYCHON
					   WHERE TENMON = @tenmon)
			BEGIN
				DELETE TUYCHON 
				WHERE TENMON = @tenmon
			END

			IF EXISTS (SELECT *
					   FROM CT_DONHANG
					   WHERE TENMON = @tenmon)
			BEGIN
				DELETE CT_DONHANG 
				WHERE TENMON = @tenmon
			END
			
			DELETE MONAN
			WHERE MATHUCDON = @matd AND TENMON = @tenmon
		END

	COMMIT TRAN