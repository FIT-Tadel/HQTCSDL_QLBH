use QLBH
go

select * from MONAN where MATHUCDON=1
select * from THUCDON where MATHUCDON=1
select * FROM DONHANG
select * from TAIXE
select * from DOITAC

insert into MONAN values(N'Bún bò',1,N'ngon',12345,N'còn',9)
UPDATE DONHANG set TINHTRANG = N'Chờ nhận', MATAIXE=null where MADH = 'SE617257'


Exec Xem_Thuc_Don 10

exec Xem_Thuc_Don_Fixed 10





