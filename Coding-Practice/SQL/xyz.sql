CREATE DATABASE IF NOT EXISTS XYZ;

USE XYZ;

CREATE TABLE employee(

id int primary key,
name varchar(50),
salary int not null

);

INSERT INTO employee
(id, name, salary)
VALUES
(1, 'Raju', 50000),
(2, 'Kaju', 30000),
(3, 'Taju', 60000);

SELECT * FROM employee;