-- This file will be updated weekly by Group02

use QLBH
go

-- < Role: KHACH HANG >
---- Xem thong tin cac mon an cua doi tac ----
DROP procedure IF EXISTS kh_xem_doi_tac
go
create PROCEDURE kh_xem_doi_tac (@madoitac char(8)) as
begin TRAN
    --check madoi tac co ton tai ko
    if @madoitac not in (select MADOITAC from DOITAC)
    BEGIN
        print'Khong ton tai ma doi tac'
        ROLLBACK TRAN
        return 
    end

    select distinct(ma.TENMON), ma.MOTA, ma.GIA, ma.TINHTRANGMON
    from MONAN ma, THUCDON td
    where ma.MATHUCDON=td.MATHUCDON and td.MADOITAC=@madoitac
COMMIT TRAN
go



---- Xem thong tin tai xe ----
DROP procedure IF EXISTS kh_xem_tt_tai_xe
go
create PROCEDURE kh_xem_tt_tai_xe @mataixe char(8) AS
begin TRAN
    if @mataixe not in (select MATAIXE from TAIXE)
    BEGIN
        print'Ma tai xe khong ton tai'
        ROLLBACK TRAN
    end

    select HOTEN, SDT, DIACHI, BIENSOXE from TAIXE where MATAIXE=@mataixe
COMMIT tran
go

---- Xem chi tiet don hang ----
DROP procedure IF EXISTS kh_xem_ct_don_hang
go
create PROCEDURE kh_xem_ct_don_hang @madonhang char(8) AS
begin TRAN
    if @madonhang not in (select MADH from DONHANG)
    BEGIN
        print'Don hang khong ton tai'
        ROLLBACK TRAN
    end

    select * from CT_DONHANG where MADH=@madonhang
COMMIT tran
go

---- Tao don hang ----
DROP procedure IF EXISTS kh_tao_don_hang
go
create PROCEDURE kh_tao_don_hang(@madonhang char(8), @madoitac char(8), @mataixe char(8),
 @makh char(8),@diachigh char(100)) AS
 BEGIN TRAN
    begin TRY
        DECLARE @sdt char(12) = (select SDT from KHACHHANG where MAKH=@makh)
        INSERT into DONHANG
        VALUES(@madonhang, @madoitac,null,@mataixe,@makh,GETDATE(), @diachigh,@sdt,null,null,N'Đang xử lý')

    end try
    begin catch 
        ROLLBACK TRAN
        return
    end CATCH
 COMMIT TRAN
 go


---- Huy don hang ----
DROP procedure IF EXISTS kh_huy_don_hang
go
create PROCEDURE kh_huy_don_hang (@madh char(8))AS
BEGIN TRAN
    begin TRY
        if exists (select * from DONHANG where MADH=@madh and TINHTRANG='dang xu ly')
        BEGIN
            update DONHANG set TINHTRANG='da huy' where MADH=@madh
            PRINT'Huy don thanh cong'
            commit TRAN
            return 
        END

        print 'Huy don that bai'
        COMMIT TRAN
        RETURN
    end try

    BEGIN CATCH
        PRINT 'Huy don that bai'
		ROLLBACK TRANSACTION
		RETURN
    END CATCH

go

--> < Role: Tai Xe >
------ Tai Xe -------
---- Xem Cac Don Hang ----
DROP PROC IF EXISTS TX_Xem_DS_DonHang
GO
CREATE PROC TX_Xem_DS_DonHang @ma_tai_xe char(8)
AS
	BEGIN
		IF(NOT EXISTS(SELECT * FROM HOATDONG WHERE MATAIXE = @ma_tai_xe))
			BEGIN
			Print(N'Cần cập nhật khu vực bạn hoạt động trước khi nhận đơn!')
			RETURN
			END

		Declare @khu_hd nvarchar(20)
		set @khu_hd = (SELECT TP FROM KHUVUCHD WHERE MAKHUVUC = (SELECT MAKHUVUC FROM HOATDONG WHERE MATAIXE = @ma_tai_xe))

		SELECT MADH,TENQUAN, HOTEN AS TenNguoiDat, DIACHI, NGAYLAP, KHACHHANG.SDT, PHIVANCHUYEN, TONGTIEN, TINHTRANG
		FROM DONHANG
			INNER JOIN KHACHHANG ON KHACHHANG.MAKH = DONHANG.MAKH
			INNER JOIN DOITAC ON DONHANG.MADOITAC = DOITAC.MADOITAC
		WHERE DIACHI LIKE '%' + @khu_hd + '%' AND TINHTRANG = N'Chờ Nhận'

		IF(@@ROWCOUNT = 0)
			BEGIN
			Print(N'Hiện tại chưa có đơn hàng ở khu vực của bạn! Xin hãy chờ!')
			RETURN
			END
	END
GO

------ Nhan Don Hang -----
DROP PROC IF EXISTS Nhan_DonHang
GO
CREATE PROC Nhan_DonHang @ma_tai_xe char(8), @ma_DH char(8)
AS
BEGIN
	BEGIN TRAN
		BEGIN TRY
		IF NOT EXISTS(SELECT * FROM DONHANG WHERE MADH = @ma_DH AND MATAIXE IS NULL)
			Print(N'Đơn hàng đã có tài xế khác tiếp nhận!')
			ROLLBACK TRAN
			RETURN
		END TRY
		BEGIN CATCH
			Print(N'Nhận đơn hàng thất bại')
			ROLLBACK TRAN
			RETURN
		END CATCH

		UPDATE DONHANG set MATAIXE = @ma_tai_xe, TINHTRANG = N'Đang giao' WHERE MADH = @ma_DH
		Print(N'Nhận đơn hàng thành công!')
	COMMIT TRAN
END
GO

----- Xem Lich Su Giao Hang ------
DROP PROC IF EXISTS Xem_LS_GiaoHang
GO
CREATE PROC Xem_LS_GiaoHang @ma_tai_xe char(8)
AS
	BEGIN
		SELECT * FROM DONHANG WHERE MATAIXE = @ma_tai_xe
	END
GO

----- Xem CT_DanhGia_TX -----
DROP PROC IF EXISTS Xem_CT_DanhGia_TX
Go
CREATE PROC Xem_CT_DanhGia_TX @ma_tai_xe char(8)
AS
	BEGIN
		SELECT * FROM CT_DANHGIA WHERE MATAIXE = @ma_tai_xe
	END
GO

--> < Role: Nhan Vien >
---- Duyet Hop Dong ----
DROP PROC IF EXISTS Duyet_Hop_Dong
GO
CREATE PROC Duyet_Hop_Dong @ma_HD char(8), @ma_DT char(8), @nguoi_lap nvarchar(50), @ma_sothue char(8),
								  @so_chi_nhanhDK int, @stk_NH char(10), @chiNhanh_NH nvarchar(30), @phi_hoa_hong float, 
								  @tg_hieu_luc datetime
AS
	BEGIN
		IF(@tg_hieu_luc < GETDATE())
			BEGIN
			Print(N'Thời gian hiệu lực của hợp đồng chưa được kích hoạt!')
			RETURN
			END
		INSERT INTO HOPDONG 
		VALUES(@ma_HD, @ma_DT, @nguoi_lap, @ma_sothue, @so_chi_nhanhDK, @stk_NH, @chiNhanh_NH, @phi_hoa_hong, @tg_hieu_luc)
		Print(N'Thêm hợp đồng thành công!')
	END
GO

---- Xem DS_HopDong cua DoiTac ----
DROP PROC IF EXISTS Xem_DS_HopDong
GO
CREATE PROC Xem_DS_HopDong @ma_doi_tac char(8) 
AS
	BEGIN
		SELECT * FROM HOPDONG WHERE MADOITAC = @ma_doi_tac
	END
GO


--> < Role: Admin >
---- Cap Quyen ----
DROP PROC IF EXISTS Cap_Quyen
GO
Create procedure Cap_Quyen
@name varchar(30)
As
	BEGIN
		Declare @safe_name varchar(100)
		Set @safe_name = REPLACE(@name,'''','''''')

		Declare @sql nvarchar(max)
		Set @sql = 'Grant select ' +
					'ON CT_DANHGIA '+ '' +
					'TO ' + '' + @safe_name
		EXEC (@sql)
	END
GO

---- Sửa thông tin tài xế ----
DROP PROC IF EXISTS SUA_TT_TX
GO
CREATE PROCEDURE SUA_TT_TX
@name varchar(30),
@mataixe char(10),
@hoten char(50),
@sdt char(12),
@diachi char(100),
@biensoxe char(15),
@email char(30),
@tk char(10)
AS
	BEGIN TRAN
		BEGIN TRY
			IF NOT EXISTS (SELECT*
						   FROM TAIXE
						   WHERE MATAIXE = @mataixe)
			BEGIN
				RAISERROR('MATAIXE KHONG TON TAI',16,1)
				ROLLBACK TRAN
			END
		END TRY

		BEGIN CATCH
			RAISERROR('KHONG THE SUA THONG TIN',16,1)
			ROLLBACK TRAN
		END CATCH

		BEGIN 
			UPDATE TAIXE
			SET HOTEN = @hoten, SDT = @sdt, DIACHI = @diachi, BIENSOXE = @biensoxe, EMAIL = @email, STK_NH = @tk
			Where MATAIXE = @mataixe
		END
	COMMIT TRAN
GO

---- Xem đơn hàng ----
DROP PROC IF EXISTS COI_DON_HANG_TX
GO
CREATE PROCEDURE COI_DON_HANG_TX
@name char(30)
AS
	BEGIN
		Declare @safe_name varchar(100)
		Set @safe_name = REPLACE(@name,'''','''''')

		Declare @sql nvarchar(max)
		Set @sql = 'Grant select ' +
					'ON DonHang '+ '' +
					'TO ' + '' + @safe_name
		EXEC (@sql)
	END
GO

---- Sửa thông tin khu vực HĐ ----
DROP PROC IF EXISTS SUA_TTKV_TX
GO
CREATE PROCEDURE SUA_TTKV_TX
@makv char(10),
@phuong varchar(30),
@tp varchar(30),
@quan varchar(10)
AS
	BEGIN TRAN
		BEGIN TRY
			IF NOT EXISTS (SELECT*
						   FROM KHUVUCHD
						   WHERE MAKHUVUC = @makv)
			BEGIN
				RAISERROR('MATAIXE KHONG TON TAI',16,1)
				ROLLBACK TRAN
			END
		END TRY

		BEGIN CATCH
			RAISERROR('KHONG THE SUA THONG TIN',16,1)
			ROLLBACK TRAN
		END CATCH

		BEGIN 
			UPDATE KHUVUCHD
			SET PHUONG = @phuong, QUAN = @quan, TP = @tp
			Where MAKHUVUC = @makv
		END
	COMMIT TRAN

---- Sửa MK của chung ----
DROP PROC IF EXISTS SUA_MK
GO
Create procedure SUA_MK
@name char(30),
@oldpass char(30),
@newpass char(30)
AS
	BEGIN
		Declare @safe_name varchar(100)
		Set @safe_name = REPLACE(@name,'''','''''')
		Declare @safe_oldpass varchar(100)
		Set @safe_oldpass = REPLACE(@oldpass,'''','''''')
		Declare @safe_newpass varchar(100)
		Set @safe_newpass = REPLACE(@newpass,'''','''''')


		Declare @sql nvarchar(max)
		Set @sql = 'ALTER LOGIN ' + @safe_name + ' ' +
					'WITH PASSWORD = '+ @newpass + ' ' +
					'OLD PASSWORD ' + '' + @oldpass
		EXEC (@sql)
	END
GO

---- Thêm tài khoản ----
DROP PROC IF EXISTS Them_TK
GO
Create procedure Them_TK
@login varchar(30),
@password varchar(30)
AS
	declare @safe_login varchar(100)
	declare @safe_password varchar(100)
	set @safe_login = replace(@login,'''', '''''')
	set @safe_password = replace(@password,'''', '''''')

	declare @sql nvarchar(max)
	set @sql = 'use QLBH;' +
			   'create login ' + @safe_login + 
				   ' with password = ''' + @safe_password + '''; '
	exec (@sql)
go

---- Xóa tài khoản ----
DROP PROC IF EXISTS Xoa_tk
GO
Create procedure Xoa_tk
@login varchar(30)
AS
	begin
		declare @safe_login varchar(100)
		set @safe_login = replace(@login,'''', '''''')
		
		declare @sql nvarchar(max)
		set @sql = 'DROP LOGIN ' + @safe_login
		exec (@sql)
	end
GO

---- Tạo user ----
DROP PROC IF EXISTS Tao_user
GO
Create procedure Tao_user
@name varchar(30),
@user varchar(30)
As
	BEGIN
		Declare @safe_name varchar(100)
		Set @safe_name = REPLACE(@name,'''','''''')
		Declare @safe_user varchar(100)
		Set @safe_user = REPLACE(@safe_user,'''','''''')

		Declare @sql nvarchar(max)
		Set @sql = 'Create User ' + @safe_user + ' '+
					'For Login ' + @safe_name
		EXEC (@sql)
	END
GO

---- Xóa user ----
DROP PROC IF EXISTS Xoa_user
GO
Create procedure Xoa_user
@user varchar(30)
AS
	begin
		declare @safe_user varchar(100)
		set @safe_user = replace(@user,'''', '''''')
		
	declare @sql nvarchar(max)
	set @sql = 'DROP USER ' + @safe_user
	exec (@sql)

	end
GO

---- Cấp quyền coi ----
DROP PROC IF EXISTS Cap_Quyen_Coi
GO
Create procedure Cap_Quyen_Coi
@name varchar(30),
@table char(30)
As
	BEGIN
		Declare @safe_name varchar(100)
		Set @safe_name = REPLACE(@name,'''','''''')

		Declare @safe_table varchar(100)
		Set @safe_table= REPLACE(@table,'''','''''')

		Declare @sql nvarchar(max)
		Set @sql = 'Grant select ' +
					'ON' + @safe_table  + '' +
					'TO ' + '' + @safe_name
		EXEC (@sql)
	END
GO

---- Cấp quyền thêm ----
DROP PROC IF EXISTS Cap_Quyen_Them
GO
Create procedure Cap_Quyen_Them
@name varchar(30),
@table char(30)
As
	BEGIN
		Declare @safe_name varchar(100)
		Set @safe_name = REPLACE(@name,'''','''''')

		Declare @safe_table varchar(100)
		Set @safe_table= REPLACE(@table,'''','''''')

		Declare @sql nvarchar(max)
		Set @sql = 'Grant insert ' +
					'ON' + @safe_table  + '' +
					'TO ' + '' + @safe_name
		EXEC (@sql)
	END
GO

---- Cấp quyền xóa ----
DROP PROC IF EXISTS Cap_Quyen_Xoa
GO
Create procedure Cap_Quyen_Xoa
@name varchar(30),
@table char(30)
As
	BEGIN
		Declare @safe_name varchar(100)
		Set @safe_name = REPLACE(@name,'''','''''')

		Declare @safe_table varchar(100)
		Set @safe_table= REPLACE(@table,'''','''''')

		Declare @sql nvarchar(max)
		Set @sql = 'Grant delete ' +
					'ON' + @safe_table  + '' +
					'TO ' + '' + @safe_name
		EXEC (@sql)
	END
GO

---- Cấp quyền sử dụng procedure ----
DROP PROC IF EXISTS Cap_Quyen_Exec
GO
Create procedure Cap_Quyen_Exec
@name varchar(30),
@table char(30)
As
	BEGIN
		Declare @safe_name varchar(100)
		Set @safe_name = REPLACE(@name,'''','''''')

		Declare @safe_table varchar(100)
		Set @safe_table= REPLACE(@table,'''','''''')

		Declare @sql nvarchar(max)
		Set @sql = 'Grant Execute ' +
					'ON' + @safe_table  + '' +
					'TO ' + '' + @safe_name
		EXEC (@sql)
	END
GO




