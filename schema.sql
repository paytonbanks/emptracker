DROP DATABASE IF EXISTS employee_db;
CREATE DATABASE employee_db;
USE employee_db;

INSERT INTO employee (first_name, last_name, persona_id, manager_id)
VALUES ("Payton, Banks", "50", 8050);

CREATE TABLE employee (
    id INT AUTO_INCREMENT NOT NULL,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    persona_id INT NOT NULL,
    manager_id INT,
    PRIMARY KEY (id)
);

CREATE TABLE  persona (
    id INT AUTO_INCREMENT NOT NULL,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL NOT NULL,
    department_id INT NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE department (
    id INT AUTO_INCREMENT NOT NULL,
    department_name VARCHAR(30) NOT NULL,
    PRIMARY KEY (id)
);

INSERT INTO employee (first_name, last_name, persona_id, manager_id)
VALUES ("Payton", "Banks", 50, 8050);

INSERT INTO persona (title, salary, department_id)
VALUES ("Vice President", 100000, 9);

INSERT INTO department (department_name)
VALUES ("Production");

