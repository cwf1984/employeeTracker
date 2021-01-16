DROP DATABASE IF EXISTS employeeTracker_db;

CREATE DATABASE employeeTracker_db;

USE employeeTracker_db;

CREATE TABLE department (
    id INTEGER(10) AUTO_INCREMENT NOT NULL,
    dept_name VARCHAR (30),
    PRIMARY KEY(id)
);

CREATE TABLE role (
    id INTEGER (10) AUTO_INCREMENT NOT NULL,
    title VARCHAR (30),
    salary DECIMAL (10, 4),
    department_id INTEGER (10),
    PRIMARY KEY(id)
);

CREATE TABLE employee (
    id INTEGER (10) AUTO_INCREMENT NOT NULL,
    first_name VARCHAR (30),
    last_name VARCHAR (30),
    role_id INTEGER (10),
    manager_id INTEGER (10),
    PRIMARY KEY(id), 
    FOREIGN KEY(manager_id)
);


INSERT INTO department (dept_name) VALUES ();

INSERT INTO role (title, salary, department_id) VALUES ();

INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUE ();