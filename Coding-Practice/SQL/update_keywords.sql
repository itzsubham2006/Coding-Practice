USE college;

UPDATE student
	SET Grade = "o"
	WHERE Grade = "A";

UPDATE student
	SET Grade = "B"
	WHERE Marks BETWEEN 80 AND 90;

update student
	SET Grade = "A"
	WHERE Marks BETWEEN 90 and 100;

delete from student
	where marks<=68;

------------------------------------------------------------------------------------------------------------------------- 

CREATE TABLE IF NOT EXISTS facaulties(
	id INT PRIMARY KEY,
	name VARCHAR(50),
	dept_id INT,
	FOREIGN KEY (dept_id) REFERENCES department(id)
    ON DELETE CASCADE
    ON UPDATE CASCADE
);


CREATE TABLE IF NOT EXISTS department(
	id INT PRIMARY KEY,
	dept_name VARCHAR(50)
);

insert into facaulties
(id, name, dept_id)
values
(100, "RJP", 100),
(101, "Nag", 101),
(102, "SMD", 102);

insert into department
(id, dept_name)
values
(100, "Computer Science & Engineering (CSE)"),
(101, "Instrumental Engineering (IE)"),
(102, "Mechanical Enginerring (ME)"),
(103, "Electronics & Communication Engineering (ECE)"),
(104, "Food Engineering Techonogy (FET)");


update department
set id=109
where id=101;

alter table department
add column age int;

alter table facaulties
rename to faculties;

SELECT * FROM department;
SELECT * FROM faculties;