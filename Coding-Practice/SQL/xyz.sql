CREATE DATABASE IF NOT EXISTS xyz;
USE xyz;


CREATE TABLE employe(
id INT PRIMARY KEY,
name VARCHAR (50),
salary INT NOT NULL
);

INSERT INTO employe
(id, name, salary)
VALUES
(1, "Subham", 100000),
(2, "Anish", 20000),
(3, "Subhra", 30000),
(4, "Jitul", 50000);

SELECT * FROM employe;


CREATE TABLE defult(
id int primary key,
name varchar(40),
salary int 
);

INSERT INTO defult
(id, name, salary)
values
(1, "name1", 20000),
(2, "name2", 10000),
(3, "name3", 20000);

SELECT * FROM defult;


CREATE TABLE city(
id int primary key,
city_name varchar(50),
age int,
constraint age_check check(age>=18 and city="kokrajhar")
);

