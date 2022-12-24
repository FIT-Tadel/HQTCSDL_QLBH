use QLBH
go

select * from MONAN WHERE MATHUCDON=10
select * from THUCDON where MATHUCDON=1
select * FROM DONHANG 
select * from TAIXE
select * from DOITAC
select * from CT_DONHANG where MADH='FU889072'
select * from CT_DONHANG where MADH='FU889072' and TENMON=N'Bánh mì thịt'

insert into MONAN values(N'Bún bò',1,N'ngon',12345,N'còn',9)
UPDATE DONHANG set TINHTRANG = N'Chờ nhận', MATAIXE=null where MADH = 'SE617257'

--phantom
Exec Xem_Thuc_Don 10

exec Xem_Thuc_Don_Fixed 10



--deadlock
Declare @kq int

Exec @kq = DT_CapNhatCH_DonHang 'SE617257', 'B8K9W7', N'Đóng cửa', N'Chờ nhận'

IF(@kq = 1)
	Print(N'Thao tác thất bại!')
ELSE Print(N'Thao tác thành công!')

-- UPDATE CUAHANG SET TINHTRANG = N'Hoạt động' WHERE MACHINHANH = 'B8K9W7'




