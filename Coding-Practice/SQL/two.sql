CREATE DATABASE IF NOT EXISTS college;
USE college;

CREATE TABLE IF NOT EXISTS student(
roll_number INT PRIMARY KEY,
name VARCHAR(50),
Marks INT NOT NULL,
Grade VARCHAR(10),
City VARCHAR(30)
);

INSERT INTO student
(roll_number, name, Marks, Grade, City)
VALUES
(101, "Anil", 78, "C", "Delhi"),
(102, "Sunil", 80, "B", "Mumbai"),
(103, "Subhra", 68, "D", "Kolkata"),
(104, "Subham", 99, "A", "Kokrajhar"),
(105, "Barun", 58, "D", "Tezpur"),
(106, "Nikesh", 82, "B", "Thelamara");

SELECT * FROM student ORDER BY Grade asc LIMIT 3;
SELECT * FROM student;

SELECT name, Marks
FROM student
WHERE max(Marks);


CREATE TABLE payment(
customer_id int primary key,
customer varchar(40) not null,
mode varchar(40) not null,
city varchar (40) not null
);

INSERT INTO payment
(customer_id, customer, mode, city)
VALUES
(100, "Olivia", "Net banking", "Portland"),
(101, "Uday", "Credit Card", "Switzerland"),
(102, "Subham", "Credit Card", "England"),
(103, "Jitul", "UPI", "Bhutan"),
(104, "Monu", "Credit Card", "Nepal"),
(105, "Sonu", "UPI", "India"),
(106, "Konu", "Credit Card", "Bhutan"),
(107, "Tonu", "UPI", "Nepal"),
(108, "Sonu", "Net banking", "India");

SELECT mode, count(customer_id)
FROM payment
GROUP BY mode;


SELECT * FROM payment;

SELECT *
FROM payment 
Where city in("India", "Nepal");
