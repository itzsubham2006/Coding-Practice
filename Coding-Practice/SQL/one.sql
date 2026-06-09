CREATE DATABASE IF NOT EXISTS institute;
DROP DATABASE IF EXISTS company;

USE institute;

CREATE TABLE basic_info (
id INT PRIMARY KEY,
name VARCHAR(50),
age INT NOT NULL
);

INSERT INTO basic_info VALUES(1, 'Subham', 19);
INSERT INTO basic_info VALUES(2, 'Nikesh', 20);
INSERT INTO basic_info VALUES(3, 'Jitul', 21);

SELECT * FROM basic_info;

SHOW DATABASES;
show tables;

INSERT INTO basic_info(id, age) VALUES(4, 22);