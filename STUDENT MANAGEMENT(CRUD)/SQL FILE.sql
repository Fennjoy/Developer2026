create database python_db;
use python_db;
create table users(

ID integer auto_increment primary key,
NAME varchar(50),
AGE integer,
CITY varchar(50)
);
select * from user;
insert into user(NAME,AGE,CITY) value ('ramkumar',45,'namakkal'),('kumar',23,'namakkal'),('raja',20,'chennai'),('sam',25,'hosur')



