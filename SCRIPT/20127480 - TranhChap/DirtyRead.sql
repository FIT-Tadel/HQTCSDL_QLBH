use QLBH
go

------------------TRAN 1-------------------------
DROP procedure IF EXISTS doitac_update_thucdon_monan
go
create PROCEDURE doitac_update_thucdon_monan (@mathucdon int, @TENMON nvarchar(80),@gia float) as
BEGIN TRAN
    update MONAN set MATHUCDON=@mathucdon,GIA=@gia where TENMON=@TENMON
    WAITFOR delay '00:00:05'

    if @gia = 0
    BEGIN
        print 'Gia cua mon an bang 0'
        ROLLBACK TRAN
        RETURN
    end

COMMIT TRAN
go


------------------TRAN 2-------------------------

            --TRAN 2 ERROR
--xem thong tin cac mon an cua doi tac ERROR
DROP procedure IF EXISTS kh_xem_doi_tac_error
go
create PROCEDURE kh_xem_doi_tac_error (@madoitac char(8), @mathucdon int) as
begin TRAN
    --check madoi tac co ton tai ko
	SET TRANSACTION ISOLATION LEVEL READ UNCOMMITTED;
    if @madoitac not in (select MADOITAC from DOITAC)
    BEGIN
        print'Khong ton tai ma doi tac'
        ROLLBACK TRAN
        return 
    end

    if @mathucdon not in (select MATHUCDON from THUCDON where MADOITAC=@madoitac)
    or @mathucdon not in (select MATHUCDON from THUCDON)
    BEGIN
        print'Khong ton tai ma thuc don'
        ROLLBACK TRAN
        return 
    end

    select *
    from MONAN ma
    where ma.MATHUCDON=@mathucdon
COMMIT TRAN
go

