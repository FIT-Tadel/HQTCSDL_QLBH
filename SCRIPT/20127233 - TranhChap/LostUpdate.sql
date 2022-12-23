--Lost update: Tài xế đã nhờ admin thay đổi thông tin biển số xe, nhưng sau đó tài xế tiếp tục thay đổi thông tin biển số xe khác trên ứng dụng -> Lost Update
USE QLBH
--T1 
DROP PROC IF EXISTS AD_DoiThongTinBienSoXe_TaiXe
GO
CREATE PROCEDURE AD_DoiThongTinBienSoXe_TaiXe
@mataixe char(10),
@biensoxe char(15)
AS
SET TRAN ISOLATION LEVEL READ UNCOMMITTED
	BEGIN TRAN
		BEGIN TRY
			IF NOT EXISTS (SELECT*
						   FROM TAIXE
						   WHERE MATAIXE = @mataixe)
			BEGIN
				RAISERROR('MATAIXE KHONG TON TAI',16,1)
				ROLLBACK TRAN
				RETURN
			END
		END TRY

		BEGIN CATCH
			RAISERROR('Khong the cap nhat thong tin, do MATAIXE khong ton tai',16,1)
			ROLLBACK TRAN
			RETURN
		END CATCH

		BEGIN
			WAITFOR DELAY '0:0:07'
			UPDATE TAIXE SET BIENSOXE = @biensoxe WHERE MATAIXE = @mataixe
			PRINT ('Doi thong tin bien so thanh cong cho tai xe ')
		END
	COMMIT TRAN
GO

--T2
DROP PROC IF EXISTS TaiXe_DoiBienSoXe
GO
CREATE PROCEDURE TaiXe_DoiBienSoXe
@mataixe char(10),
@biensoxe char(15)
AS
SET TRAN ISOLATION LEVEL READ UNCOMMITTED
	BEGIN TRAN
		BEGIN TRY
				IF NOT EXISTS (SELECT*
							   FROM TAIXE
							   WHERE MATAIXE = @mataixe)
				BEGIN
					RAISERROR('MATAIXE KHONG TON TAI',16,1)
					ROLLBACK TRAN
					RETURN
				END
			END TRY

			BEGIN CATCH
				RAISERROR('Khong the cap nhat thong tin, do MATAIXE khong ton tai',16,1)
				ROLLBACK TRAN
				RETURN
			END CATCH
		BEGIN
			WAITFOR DELAY '0:0:03'
			UPDATE TAIXE SET BIENSOXE = @biensoxe WHERE MATAIXE = @mataixe
			PRINT ('Doi thong tin bien so thanh cong ')
		END
	COMMIT TRAN
GO