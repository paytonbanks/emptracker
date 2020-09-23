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
VALUES ("Payton", "Banks", 3, 0);
INSERT INTO employee (first_name, last_name, persona_id, manager_id)
VALUES ("Tom", "Jones", 1, 0);
INSERT INTO employee (first_name, last_name, persona_id, manager_id)
VALUES ("Rick", "Johnson", 3, 0);
INSERT INTO employee (first_name, last_name, persona_id, manager_id)
VALUES ("Steve", "Blake", 4, 0);
INSERT INTO employee (first_name, last_name, persona_id, manager_id)
VALUES ("Brian", "Marks", 2, 0);
INSERT INTO employee (first_name, last_name, persona_id, manager_id)
VALUES ("Sandra", "Stella", 4, 0);
INSERT INTO employee (first_name, last_name, persona_id, manager_id)
VALUES ("Artois", "Miller", 5, 0);
INSERT INTO employee (first_name, last_name, persona_id, manager_id)
VALUES ("Ben", "Jerry", 6, 0);

INSERT INTO persona (title, salary, department_id)
VALUES ("Salesperson", 100000, 1);
INSERT INTO persona (title, salary, department_id)
VALUES ("Sales Manager", 150000, 1);
INSERT INTO persona (title, salary, department_id)
VALUES ("Engineer", 175000, 2);
INSERT INTO persona (title, salary, department_id)
VALUES ("Senior Engineer", 200000, 2);
INSERT INTO persona (title, salary, department_id)
VALUES ("Vice President", 250000, 3);
INSERT INTO persona (title, salary, department_id)
VALUES ("Regional Manager", 300000, 3;
INSERT INTO persona (title, salary, department_id)
VALUES ("Attorney", 375000, 4);

INSERT INTO department (department_name)
VALUES ("Sales");
INSERT INTO department (department_name)
VALUES ("Tech");
INSERT INTO department (department_name)
VALUES ("Operations");
INSERT INTO department (department_name)
VALUES ("Legal");

