//5.3 MySQL 
//本地安装MySQL + navicat
//## 1)建立一个数据库 
// create database 库名;

//## 2)显示数据库列表
// show  databases; 

//## 3)建立数据表
//    use 库名；
//   CREATE TABLE  表名(字段名  VACHAR(),字段名  VACHAR());

// CREATE TABLE Persons
// (
// Id_P int,
// LastName varchar(255),
// FirstName varchar(255),
// Address varchar(255),
// City varchar(255)
// )

//INSERT INTO 语句  插入
// INSERT INTO 表名称 VALUES (值1, 值2,....);
// 我们也可以指定所要插入数据的列：
// INSERT INTO table_name (列1, 列2,...) VALUES (值1, 值2,....);

//INSERT INTO Persons(Id_P,LastName,FirstName,Address,City) VALUES('1','huan','bao','baocaolu','chendu');
//INSERT INTO Persons(Id_P,LastName,FirstName,Address,City) VALUES('2','huan','bao','baocaolu','chendu');
//## 4)显示表
//   show TABLES;

//## 5)删除数据库
//   DROP DATABASE 库名；

//## 6)删除数据表
//   DROP TABLE 表名；

//## 7)停止mysql
//  net stop mysql

//## 8)退出mysql
//   quit或者exit
