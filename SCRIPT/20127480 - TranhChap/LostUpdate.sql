use QLBH
go

------------------TRAN 1-------------------------

            --TRAN 1 ERROR
DROP procedure IF EXISTS taixe_update_tinhtrang_donhang_error
go
create PROCEDURE taixe_update_tinhtrang_donhang_error (@mataixe char(8), @madh char(8)) AS
begin TRAN

    if not exists (select * from DONHANG
    where MADH=@madh and MATAIXE is null and TINHTRANG=N'Chờ nhận')
    begin
        print'Nhan don that bai'
        ROLLBACK TRAN
        RETURN
    end

    if not exists (select * from TAIXE where MATAIXE=@mataixe)
    begin
        print'Ma tai xe khong ton tai'
        ROLLBACK TRAN
        RETURN
    end

    WAITFOR delay '00:00:03'
    UPDATE DONHANG
    SET MATAIXE=@mataixe, TINHTRANG=N'Đang giao'
    where MADH=@madh

    PRINT'Nhan don thanh cong' 

COMMIT TRAN
go


------------------TRAN 2-------------------------

            --TRAN 2 ERROR
--huy don hang error
DROP procedure IF EXISTS kh_huy_don_hang_error
go
create PROCEDURE kh_huy_don_hang_error (@madh char(8))AS
BEGIN TRAN
    begin TRY
        if exists (select * from DONHANG where MADH=@madh and TINHTRANG=N'Chờ nhận')
        BEGIN
            update DONHANG set TINHTRANG=N'Bị hủy' where MADH=@madh
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