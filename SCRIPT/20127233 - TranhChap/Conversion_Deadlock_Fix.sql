--Fix Convention Deadlook
USE QLBH
GO

DROP PROC IF EXISTS TX_Nhan_DonHang_Fixed
GO
CREATE PROC TX_Nhan_DonHang_Fixed @ma_tai_xe char(8), @ma_DH char(8)
AS
SET TRAN ISOLATION LEVEL SERIALIZABLE
	BEGIN TRAN
		BEGIN TRY
		IF NOT EXISTS(SELECT * FROM DONHANG WITH(UPDLOCK) WHERE MADH = @ma_DH AND MATAIXE IS NULL)
			BEGIN
			Print(N'Đơn hàng đã có tài xế khác tiếp nhận!')
			ROLLBACK TRAN
			RETURN 
			END
		END TRY
		BEGIN CATCH
			BEGIN
			Print(N'Nhận đơn hàng thất bại')
			ROLLBACK TRAN
			RETURN
			END
		END CATCH

		WAITFOR DELAY '0:0:05'
		UPDATE DONHANG  WITH(UPDLOCK) set MATAIXE = @ma_tai_xe, TINHTRANG = N'Đang giao' WHERE MADH = @ma_DH
		Print(N'Nhận đơn hàng thành công!')
	COMMIT TRAN
GO
