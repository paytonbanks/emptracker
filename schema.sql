DROP DATABASE IF EXISTS empmgr;
CREATE DATABASE empmgr;
USE empmgr;

CREATE TABLE employee(
  id INT (20) AUTO_INCREMENT NOT NULL,
  first_name VARCHAR (30),
  last_name VARCHAR (30),
  oper_id INT NOT NULL,
  manager_id INT NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (oper_id) REFERENCES oper(id)
  FOREIGN KEY (manager_id) REFERENCES oper(id)

);

CREATE TABLE oper(
  id INT (20) AUTO_INCREMENT NOT NULL,
  title VARCHAR (30),
  salary DECIMAL (10,2),
  department_id INT,
  PRIMARY KEY (id),
  FOREIGN KEY (department_id) REFERENCES id)
);

CREATE TABLE department(
  id INT (20) AUTO_INCREMENT NOT NULL,
  department_name VARCHAR(30)
  PRIMARY KEY (id),
  
);


INSERT INTO employee (firstName, lastName) values ('Jane', 'Austen');
INSERT INTO employee (firstName, lastName) values ('Jane', 'Austen');






-- / * **department**:
-- CREATE DATABASE
-- //   * **id** - INT PRIMARY KEY
-- //   * **name** - VARCHAR(30) to hold department name

-- // * **role**:

-- //   * **id** - INT PRIMARY KEY
-- //   * **title** -  VARCHAR(30) to hold role title
-- //   * **salary** -  DECIMAL to hold role salary
-- //   * **department_id** -  INT to hold reference to department role belongs to

-- // * **employee**:

-- //   * **id** - INT PRIMARY KEY
-- //   * **first_name** - VARCHAR(30) to hold employee first name
-- //   * **last_name** - VARCHAR(30) to hold employee last name
-- //   * **role_id** - INT to hold reference to role employee has
-- //   * **manager_id** - INT to hold reference to another employee that manages the employee being Created. This field may be null if the employee has no manager