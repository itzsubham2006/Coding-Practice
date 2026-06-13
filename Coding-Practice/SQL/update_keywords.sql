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

CREATE TABLE IF NOT EXISTS department(
	id INT PRIMARY KEY,
	dept_name VARCHAR(50)
);

CREATE TABLE IF NOT EXISTS facaulties(
	id INT PRIMARY KEY,
	name VARCHAR(50),
	dept_id INT,
	FOREIGN KEY (dept_id) REFERENCES department(id)
    ON DELETE CASCADE
    ON UPDATE CASCADE
);



SELECT * FROM student;