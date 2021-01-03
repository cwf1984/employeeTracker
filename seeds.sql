USE employeetracker;

INSERT INTO department
    (dept_name) 
VALUES 
    ("Sales"),
    ("Engineering"),
    ("Finance"),
    ("Advertising"),
    ("Human Resources");

SELECT * from employeetracker.department;


INSERT INTO role
    (title, salary, department_id) 
VALUES 
    ("Sales Lead", 100000, 1),
    ("Salesperson", 80000, 1),
    ("Lead Engineer", 120000, 2),
    ("Software Engineer", 90000, 2),
    ("Accountant", 75000, 3),
    ("Head Designer", 120000, 4),
    ("Web Designer", 60000, 4),
    ("Recruiter", 70000, 5),
    ("HR Specialist", 55000, 1);

INSERT INTO employee
    (first_name, last_name, role_id, manager_id) 
VALUES 
    ("Richard", "Yates", 1, null),
    ("John", "Cheever", 2, 1),
    ("Margaret", "Atwood", 3, null),
    ("Haruki", "Murakami", 2, 3),
    ("John", "Irving", 2, null),
    ("Charles", "Bukowski", 7, 7),
    ("Stephen", "King", 6, null),
    ("Toni", "Morrison", 8, null),
    ("Harper", "Lee", 9, 8);