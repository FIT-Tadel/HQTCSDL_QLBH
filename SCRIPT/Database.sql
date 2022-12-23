/*==============================================================*/
/* DBMS name:      Microsoft SQL Server 2008                    */
/* Created on:     11/29/2022 7:38:20 PM                        */
/*==============================================================*/
CREATE DATABASE QLBH
GO
use QLBH
GO


if exists (select 1
   from sys.sysreferences r join sys.sysobjects o on (o.id = r.constid and o.type = 'F')
   where r.fkeyid = object_id('CT_DANHGIA') and o.name = 'FK_CT_DANHG_CO6_TAIXE')
alter table CT_DANHGIA
   drop constraint FK_CT_DANHG_CO6_TAIXE
go

if exists (select 1
   from sys.sysreferences r join sys.sysobjects o on (o.id = r.constid and o.type = 'F')
   where r.fkeyid = object_id('CT_DANHGIA') and o.name = 'FK_CT_DANHG_CO_CHITIE_DONHANG')
alter table CT_DANHGIA
   drop constraint FK_CT_DANHG_CO_CHITIE_DONHANG
go

if exists (select 1
   from sys.sysreferences r join sys.sysobjects o on (o.id = r.constid and o.type = 'F')
   where r.fkeyid = object_id('CT_DANHGIA') and o.name = 'FK_CT_DANHG_DANHGIA_KHACHHAN')
alter table CT_DANHGIA
   drop constraint FK_CT_DANHG_DANHGIA_KHACHHAN
go

if exists (select 1
   from sys.sysreferences r join sys.sysobjects o on (o.id = r.constid and o.type = 'F')
   where r.fkeyid = object_id('CT_DONHANG') and o.name = 'FK_CT_DONHA_CO_DONHANG')
alter table CT_DONHANG
   drop constraint FK_CT_DONHA_CO_DONHANG
go

if exists (select 1
   from sys.sysreferences r join sys.sysobjects o on (o.id = r.constid and o.type = 'F')
   where r.fkeyid = object_id('CT_DONHANG') and o.name = 'FK_CT_DONHA_THUOC_MONAN')
alter table CT_DONHANG
   drop constraint FK_CT_DONHA_THUOC_MONAN
go

if exists (select 1
   from sys.sysreferences r join sys.sysobjects o on (o.id = r.constid and o.type = 'F')
   where r.fkeyid = object_id('CUAHANG') and o.name = 'FK_CUAHANG_QUANLY_DOITAC')
alter table CUAHANG
   drop constraint FK_CUAHANG_QUANLY_DOITAC
go

if exists (select 1
   from sys.sysreferences r join sys.sysobjects o on (o.id = r.constid and o.type = 'F')
   where r.fkeyid = object_id('DONHANG') and o.name = 'FK_DONHANG_CO3_DOITAC')
alter table DONHANG
   drop constraint FK_DONHANG_CO3_DOITAC
go

if exists (select 1
   from sys.sysreferences r join sys.sysobjects o on (o.id = r.constid and o.type = 'F')
   where r.fkeyid = object_id('DONHANG') and o.name = 'FK_DONHANG_GIAO_TAIXE')
alter table DONHANG
   drop constraint FK_DONHANG_GIAO_TAIXE
go

if exists (select 1
   from sys.sysreferences r join sys.sysobjects o on (o.id = r.constid and o.type = 'F')
   where r.fkeyid = object_id('DONHANG') and o.name = 'FK_DONHANG_THUOC1_KHACHHAN')
alter table DONHANG
   drop constraint FK_DONHANG_THUOC1_KHACHHAN
go

if exists (select 1
   from sys.sysreferences r join sys.sysobjects o on (o.id = r.constid and o.type = 'F')
   where r.fkeyid = object_id('HOATDONG') and o.name = 'FK_HOATDONG_HOATDONG_KHUVUCHD')
alter table HOATDONG
   drop constraint FK_HOATDONG_HOATDONG_KHUVUCHD
go

if exists (select 1
   from sys.sysreferences r join sys.sysobjects o on (o.id = r.constid and o.type = 'F')
   where r.fkeyid = object_id('HOATDONG') and o.name = 'FK_HOATDONG_HOATDONG2_TAIXE')
alter table HOATDONG
   drop constraint FK_HOATDONG_HOATDONG2_TAIXE
go

if exists (select 1
   from sys.sysreferences r join sys.sysobjects o on (o.id = r.constid and o.type = 'F')
   where r.fkeyid = object_id('HOPDONG') and o.name = 'FK_HOPDONG_LAP_DOITAC')
alter table HOPDONG
   drop constraint FK_HOPDONG_LAP_DOITAC
go

if exists (select 1
   from sys.sysreferences r join sys.sysobjects o on (o.id = r.constid and o.type = 'F')
   where r.fkeyid = object_id('MONAN') and o.name = 'FK_MONAN_BAO_GOM_THUCDON')
alter table MONAN
   drop constraint FK_MONAN_BAO_GOM_THUCDON
go

if exists (select 1
   from sys.sysreferences r join sys.sysobjects o on (o.id = r.constid and o.type = 'F')
   where r.fkeyid = object_id('THUCDON') and o.name = 'FK_THUCDON_TAO_DOITAC')
alter table THUCDON
   drop constraint FK_THUCDON_TAO_DOITAC
go

if exists (select 1
   from sys.sysreferences r join sys.sysobjects o on (o.id = r.constid and o.type = 'F')
   where r.fkeyid = object_id('TUYCHON') and o.name = 'FK_TUYCHON_CO_THEM_MONAN')
alter table TUYCHON
   drop constraint FK_TUYCHON_CO_THEM_MONAN
go

if exists (select 1
            from  sysindexes
           where  id    = object_id('CT_DANHGIA')
            and   name  = 'CO_CHITIET_FK'
            and   indid > 0
            and   indid < 255)
   drop index CT_DANHGIA.CO_CHITIET_FK
go

if exists (select 1
            from  sysindexes
           where  id    = object_id('CT_DANHGIA')
            and   name  = 'CO6_FK'
            and   indid > 0
            and   indid < 255)
   drop index CT_DANHGIA.CO6_FK
go

if exists (select 1
            from  sysindexes
           where  id    = object_id('CT_DANHGIA')
            and   name  = 'DANHGIA_FK'
            and   indid > 0
            and   indid < 255)
   drop index CT_DANHGIA.DANHGIA_FK
go

if exists (select 1
            from  sysobjects
           where  id = object_id('CT_DANHGIA')
            and   type = 'U')
   drop table CT_DANHGIA
go

if exists (select 1
            from  sysindexes
           where  id    = object_id('CT_DONHANG')
            and   name  = 'CO_FK'
            and   indid > 0
            and   indid < 255)
   drop index CT_DONHANG.CO_FK
go

if exists (select 1
            from  sysindexes
           where  id    = object_id('CT_DONHANG')
            and   name  = 'THUOC_FK'
            and   indid > 0
            and   indid < 255)
   drop index CT_DONHANG.THUOC_FK
go

if exists (select 1
            from  sysobjects
           where  id = object_id('CT_DONHANG')
            and   type = 'U')
   drop table CT_DONHANG
go

if exists (select 1
            from  sysindexes
           where  id    = object_id('CUAHANG')
            and   name  = 'QUANLY_FK'
            and   indid > 0
            and   indid < 255)
   drop index CUAHANG.QUANLY_FK
go

if exists (select 1
            from  sysobjects
           where  id = object_id('CUAHANG')
            and   type = 'U')
   drop table CUAHANG
go

if exists (select 1
            from  sysobjects
           where  id = object_id('DOITAC')
            and   type = 'U')
   drop table DOITAC
go

if exists (select 1
            from  sysindexes
           where  id    = object_id('DONHANG')
            and   name  = 'GIAO_FK'
            and   indid > 0
            and   indid < 255)
   drop index DONHANG.GIAO_FK
go

if exists (select 1
            from  sysindexes
           where  id    = object_id('DONHANG')
            and   name  = 'THUOC1_FK'
            and   indid > 0
            and   indid < 255)
   drop index DONHANG.THUOC1_FK
go

if exists (select 1
            from  sysindexes
           where  id    = object_id('DONHANG')
            and   name  = 'CO3_FK'
            and   indid > 0
            and   indid < 255)
   drop index DONHANG.CO3_FK
go

if exists (select 1
            from  sysobjects
           where  id = object_id('DONHANG')
            and   type = 'U')
   drop table DONHANG
go

if exists (select 1
            from  sysindexes
           where  id    = object_id('HOATDONG')
            and   name  = 'HOATDONG2_FK'
            and   indid > 0
            and   indid < 255)
   drop index HOATDONG.HOATDONG2_FK
go

if exists (select 1
            from  sysindexes
           where  id    = object_id('HOATDONG')
            and   name  = 'HOATDONG_FK'
            and   indid > 0
            and   indid < 255)
   drop index HOATDONG.HOATDONG_FK
go

if exists (select 1
            from  sysobjects
           where  id = object_id('HOATDONG')
            and   type = 'U')
   drop table HOATDONG
go

if exists (select 1
            from  sysindexes
           where  id    = object_id('HOPDONG')
            and   name  = 'LAP_FK'
            and   indid > 0
            and   indid < 255)
   drop index HOPDONG.LAP_FK
go

if exists (select 1
            from  sysobjects
           where  id = object_id('HOPDONG')
            and   type = 'U')
   drop table HOPDONG
go

if exists (select 1
            from  sysobjects
           where  id = object_id('KHACHHANG')
            and   type = 'U')
   drop table KHACHHANG
go

if exists (select 1
            from  sysobjects
           where  id = object_id('KHUVUCHD')
            and   type = 'U')
   drop table KHUVUCHD
go

if exists (select 1
            from  sysindexes
           where  id    = object_id('MONAN')
            and   name  = 'BAO_GOM_FK'
            and   indid > 0
            and   indid < 255)
   drop index MONAN.BAO_GOM_FK
go

if exists (select 1
            from  sysobjects
           where  id = object_id('MONAN')
            and   type = 'U')
   drop table MONAN
go

if exists (select 1
            from  sysobjects
           where  id = object_id('TAIXE')
            and   type = 'U')
   drop table TAIXE
go

if exists (select 1
            from  sysindexes
           where  id    = object_id('THUCDON')
            and   name  = 'TAO_FK'
            and   indid > 0
            and   indid < 255)
   drop index THUCDON.TAO_FK
go

if exists (select 1
            from  sysobjects
           where  id = object_id('THUCDON')
            and   type = 'U')
   drop table THUCDON
go

if exists (select 1
            from  sysindexes
           where  id    = object_id('TUYCHON')
            and   name  = 'CO_THEM_FK'
            and   indid > 0
            and   indid < 255)
   drop index TUYCHON.CO_THEM_FK
go

if exists (select 1
            from  sysobjects
           where  id = object_id('TUYCHON')
            and   type = 'U')
   drop table TUYCHON
go

/*==============================================================*/
/* Table: CT_DANHGIA                                            */
/*==============================================================*/
create table CT_DANHGIA (
   MACHITIETDG          char(8)              not null,
   MADH                 char(8)              not null,
   MATAIXE              char(8)              not null,
   MAKH                 char(8)              not null,
   DANHGIATAIXE         int                  null,
   DANHGIADONHANG       int                  null,
   COMMENTTAIXE         nvarchar(100)        null,
   COMMENTDONHANG       nvarchar(100)        null,
   constraint PK_CT_DANHGIA primary key nonclustered (MACHITIETDG)
)
go

/*==============================================================*/
/* Index: DANHGIA_FK                                            */
/*==============================================================*/
create index DANHGIA_FK on CT_DANHGIA (
MAKH ASC
)
go

/*==============================================================*/
/* Index: CO6_FK                                                */
/*==============================================================*/
create index CO6_FK on CT_DANHGIA (
MATAIXE ASC
)
go

/*==============================================================*/
/* Index: CO_CHITIET_FK                                         */
/*==============================================================*/
create index CO_CHITIET_FK on CT_DANHGIA (
MADH ASC
)
go

/*==============================================================*/
/* Table: CT_DONHANG                                            */
/*==============================================================*/
create table CT_DONHANG (
   MADH                 char(8)              not null,
   TENMON               nvarchar(80)         not null,
   SOLUONGMON           int                  null,
   constraint PK_CT_DONHANG primary key (MADH, TENMON)
)
go

/*==============================================================*/
/* Index: THUOC_FK                                              */
/*==============================================================*/
create index THUOC_FK on CT_DONHANG (
TENMON ASC
)
go

/*==============================================================*/
/* Index: CO_FK                                                 */
/*==============================================================*/
create index CO_FK on CT_DONHANG (
MADH ASC
)
go

/*==============================================================*/
/* Table: CUAHANG                                               */
/*==============================================================*/
create table CUAHANG (
   MACHINHANH           char(8)              not null,
   MADOITAC             char(8)              not null,
   DIACHI               nvarchar(100)        null,
   THOIGIANHD           datetime             null,
   TINHTRANG            nvarchar(30)         null,
   constraint PK_CUAHANG primary key nonclustered (MACHINHANH)
)
go

/*==============================================================*/
/* Index: QUANLY_FK                                             */
/*==============================================================*/
create index QUANLY_FK on CUAHANG (
MADOITAC ASC
)
go

/*==============================================================*/
/* Table: DOITAC                                                */
/*==============================================================*/
create table DOITAC (
   MADOITAC             char(8)              not null,
   TENQUAN              nvarchar(50)         null,
   NGUOIDAIDIEN         nvarchar(50)         null,
   TP                   nvarchar(30)         null,
   EMAIL                char(30)             null,
   QUAN                 nvarchar(20)         null,
   SLCHINHANH           int                  null,
   SLDONHANG            int                  null,
   LOAIAMTHUC           nvarchar(30)         null,
   SDT                  char(12)             null,
   LANCUOICAPNHATTENCH  datetime             null,
   DIEMDANHGIADT        int                  null,
   DOANHTHU             float                null,
   constraint PK_DOITAC primary key nonclustered (MADOITAC)
)
go

/*==============================================================*/
/* Table: DONHANG                                               */
/*==============================================================*/
create table DONHANG (
   MADH                 char(8)              not null,
   MADOITAC             char(8)              not null,
   MATAIXE              char(8)              null,
   MAKH                 char(8)              not null,
   NGAYLAP              datetime             null,
   SDT                  char(12)             null,
   PHIVANCHUYEN         float                null,
   TONGTIEN             float                null,
   TINHTRANG            nvarchar(30)         null,
   constraint PK_DONHANG primary key nonclustered (MADH)
)
go

/*==============================================================*/
/* Index: CO3_FK                                                */
/*==============================================================*/
create index CO3_FK on DONHANG (
MADOITAC ASC
)
go

/*==============================================================*/
/* Index: THUOC1_FK                                             */
/*==============================================================*/
create index THUOC1_FK on DONHANG (
MAKH ASC
)
go

/*==============================================================*/
/* Index: GIAO_FK                                               */
/*==============================================================*/
create index GIAO_FK on DONHANG (
MATAIXE ASC
)
go

/*==============================================================*/
/* Table: HOATDONG                                              */
/*==============================================================*/
create table HOATDONG (
   MAKHUVUC             char(8)              not null,
   MATAIXE              char(8)              not null,
   constraint PK_HOATDONG primary key (MAKHUVUC, MATAIXE)
)
go

/*==============================================================*/
/* Index: HOATDONG_FK                                           */
/*==============================================================*/
create index HOATDONG_FK on HOATDONG (
MAKHUVUC ASC
)
go

/*==============================================================*/
/* Index: HOATDONG2_FK                                          */
/*==============================================================*/
create index HOATDONG2_FK on HOATDONG (
MATAIXE ASC
)
go

/*==============================================================*/
/* Table: HOPDONG                                               */
/*==============================================================*/
create table HOPDONG (
   MASOHD               char(8)              not null,
   MADOITAC             char(8)              not null,
   NGUOILAP             nvarchar(50)         null,
   MASOTHUE             char(8)              null,
   SOCHINHANHDK         int                  null,
   STK_NH               char(10)             null,
   CHINHANH_NH          nvarchar(30)         null,
   PHIHOAHONG           float                null,
   TGHIEULUC            datetime             null,
   constraint PK_HOPDONG primary key nonclustered (MASOHD)
)
go

/*==============================================================*/
/* Index: LAP_FK                                                */
/*==============================================================*/
create index LAP_FK on HOPDONG (
MADOITAC ASC
)
go

/*==============================================================*/
/* Table: KHACHHANG                                             */
/*==============================================================*/
create table KHACHHANG (
   MAKH                 char(8)              not null,
   HOTEN                nvarchar(50)         null,
   SDT                  char(12)             null,
   DIACHI               nvarchar(100)        null,
   EMAIL                char(30)             null,
   CCCD                 char(20)             null,
   constraint PK_KHACHHANG primary key nonclustered (MAKH)
)
go

/*==============================================================*/
/* Table: KHUVUCHD                                              */
/*==============================================================*/
create table KHUVUCHD (
   MAKHUVUC             char(8)              not null,
   PHUONG               nvarchar(50)         null,
   QUAN                 nvarchar(20)         null,
   TP                   nvarchar(20)         null,
   constraint PK_KHUVUCHD primary key nonclustered (MAKHUVUC)
)
go

/*==============================================================*/
/* Table: MONAN                                                 */
/*==============================================================*/
create table MONAN (
   TENMON               nvarchar(80)         not null,
   MATHUCDON            int                  null,
   MOTA                 nvarchar(50)         null,
   GIA                  float                null,
   TINHTRANGMON         nvarchar(30)         null,
   DIEMDANHGIA          int                  null,
   constraint PK_MONAN primary key nonclustered (TENMON)
)
go

/*==============================================================*/
/* Index: BAO_GOM_FK                                            */
/*==============================================================*/
create index BAO_GOM_FK on MONAN (
MATHUCDON ASC
)
go

/*==============================================================*/
/* Table: TAIXE                                                 */
/*==============================================================*/
create table TAIXE (
   MATAIXE              char(8)              not null,
   HOTEN                nvarchar(50)         null,
   CCCD                 char(20)             null,
   SDT                  char(12)             null,
   DIACHI               nvarchar(100)        null,
   BIENSOXE             char(15)             null,
   EMAIL                char(30)             null,
   STK_NH               char(10)             null,
   DIEMDANHGIATX        int                  null,
   THUNHAPTX            float                null,
   constraint PK_TAIXE primary key nonclustered (MATAIXE)
)
go

/*==============================================================*/
/* Table: THUCDON                                               */
/*==============================================================*/
create table THUCDON (
   MATHUCDON            int                  not null,
   MADOITAC             char(8)              not null,
   SOLUONGMON           int                  null,
   constraint PK_THUCDON primary key nonclustered (MATHUCDON)
)
go

/*==============================================================*/
/* Index: TAO_FK                                                */
/*==============================================================*/
create index TAO_FK on THUCDON (
MADOITAC ASC
)
go

/*==============================================================*/
/* Table: TUYCHON                                               */
/*==============================================================*/
create table TUYCHON (
   TENMON               nvarchar(80)         not null,
   MOTATUYCHON          nvarchar(100)        not null,
   constraint PK_TUYCHON primary key (TENMON, MOTATUYCHON)
)
go

/*==============================================================*/
/* Index: CO_THEM_FK                                            */
/*==============================================================*/
create index CO_THEM_FK on TUYCHON (
TENMON ASC
)
go

alter table CT_DANHGIA
   add constraint FK_CT_DANHG_CO6_TAIXE foreign key (MATAIXE)
      references TAIXE (MATAIXE)
go

alter table CT_DANHGIA
   add constraint FK_CT_DANHG_CO_CHITIE_DONHANG foreign key (MADH)
      references DONHANG (MADH)
go

alter table CT_DANHGIA
   add constraint FK_CT_DANHG_DANHGIA_KHACHHAN foreign key (MAKH)
      references KHACHHANG (MAKH)
go

alter table CT_DONHANG
   add constraint FK_CT_DONHA_CO_DONHANG foreign key (MADH)
      references DONHANG (MADH)
go

alter table CT_DONHANG
   add constraint FK_CT_DONHA_THUOC_MONAN foreign key (TENMON)
      references MONAN (TENMON)
go

alter table CUAHANG
   add constraint FK_CUAHANG_QUANLY_DOITAC foreign key (MADOITAC)
      references DOITAC (MADOITAC)
go

alter table DONHANG
   add constraint FK_DONHANG_CO3_DOITAC foreign key (MADOITAC)
      references DOITAC (MADOITAC)
go

alter table DONHANG
   add constraint FK_DONHANG_GIAO_TAIXE foreign key (MATAIXE)
      references TAIXE (MATAIXE)
go

alter table DONHANG
   add constraint FK_DONHANG_THUOC1_KHACHHAN foreign key (MAKH)
      references KHACHHANG (MAKH)
go

alter table HOATDONG
   add constraint FK_HOATDONG_HOATDONG_KHUVUCHD foreign key (MAKHUVUC)
      references KHUVUCHD (MAKHUVUC)
go

alter table HOATDONG
   add constraint FK_HOATDONG_HOATDONG2_TAIXE foreign key (MATAIXE)
      references TAIXE (MATAIXE)
go

alter table HOPDONG
   add constraint FK_HOPDONG_LAP_DOITAC foreign key (MADOITAC)
      references DOITAC (MADOITAC)
go

alter table MONAN
   add constraint FK_MONAN_BAO_GOM_THUCDON foreign key (MATHUCDON)
      references THUCDON (MATHUCDON)
go

alter table THUCDON
   add constraint FK_THUCDON_TAO_DOITAC foreign key (MADOITAC)
      references DOITAC (MADOITAC)
go

alter table TUYCHON
   add constraint FK_TUYCHON_CO_THEM_MONAN foreign key (TENMON)
      references MONAN (TENMON)
go
