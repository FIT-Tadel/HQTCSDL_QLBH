-- Circle Deadlock: Fix -> Sử dụng logic nhất quán, transaction truy cập theo thứ tự DonHang -> CuaHang
--            T1									   T2
-- DT: Update DonHang(TinhTrangDH)    |   TX:   UPDATE DonHang(TinhTrang, MaTaiXe) (Nhận đơn)
-- DT: Update CuaHang(TinhTrangCH)    |   TX:   SELECT CuaHang(Xem thông tin, địa chỉ nhận đơn để giao,..)
--T1
use QLBH
GO

DROP PROC IF EXISTS DT_CapNhatCH_DonHang_Fixed
GO
CREATE PROC DT_CapNhatCH_DonHang_Fixed (@maDH char(8), @ma_chi_nhanh char(8), @tinhtrang_CH nvarchar(30), @tinhtrang_DH nvarchar(30))              
AS
SET TRAN ISOLATION LEVEL SERIALIZABLE
BEGIN TRAN
	BEGIN TRY
	IF(NOT EXISTS(SELECT * FROM CUAHANG WHERE MACHINHANH = @ma_chi_nhanh))
		BEGIN
		Print(N'Cửa hàng không tồn tại!')
		ROLLBACK TRAN
		RETURN 1
		END

	END TRY
	BEGIN CATCH
	Print(N'Thao tác thất bại!')
	ROLLBACK TRAN
	END CATCH

	UPDATE DONHANG SET TINHTRANG = @tinhtrang_DH WHERE MADH = @maDH
	WAITFOR DELAY '0:0:05'
	UPDATE CUAHANG SET TINHTRANG = @tinhtrang_CH WHERE MACHINHANH = @ma_chi_nhanh

COMMIT TRAN
RETURN 0
GO

--T2
DROP PROC IF EXISTS TX_NhanDon_XemTTCH
GO
CREATE PROC TX_NhanDon_XemTTCH @maDH char(8), @ma_tai_xe char(8)          
AS
SET TRAN ISOLATION LEVEL SERIALIZABLE
BEGIN TRAN
	BEGIN TRY
		IF(NOT EXISTS(SELECT * FROM HOATDONG WHERE MATAIXE = @ma_tai_xe))
			BEGIN
				Print(N'Cần cập nhật khu vực bạn hoạt động trước khi nhận đơn!')
				ROLLBACK TRAN
				RETURN 1
			END

		Declare @khu_hd nvarchar(20)
		set @khu_hd = (SELECT TP FROM KHUVUCHD WHERE MAKHUVUC = (SELECT MAKHUVUC FROM HOATDONG WHERE MATAIXE = @ma_tai_xe))
		
		UPDATE DONHANG SET TINHTRANG = N'Đang giao', MATAIXE = @ma_tai_xe WHERE MADH = @maDH
		
		SELECT TENQUAN, NGUOIDAIDIEN, DIACHI, THOIGIANHD, TINHTRANG
		FROM CUAHANG
		INNER JOIN DOITAC ON DOITAC.MADOITAC = CUAHANG.MADOITAC
		WHERE DIACHI LIKE '%' + @khu_hd + '%' AND TINHTRANG = N'Hoạt động'
	END TRY
	BEGIN CATCH
		Print(N'Thao tác thất bại!')
		ROLLBACK TRAN
		RETURN 1
	END CATCH
COMMIT TRAN
RETURN 0
GO
