const db = require("./db");
const connection = require("./db/connection");
const inquirer = require("inquirer");
const cTable = require("console.table");
const logo = require('asciiart-logo');

function start() {
    inquirer.prompt({
        name: "whatToDo",
        type: "list",
        message: "What would you like to do?",
        choices: [
            "Add_Department",
            "Add_Role",
            "Add_Employee",
            "Update_Employee_Role",
            "View_Departments",
            "View_Roles",
            "View_Employees",
            "Exit"
        ]
    }).then((answer) => {

        switch( answer.action ) {

            case "Add_Department":
                addDepartment();
                return;

            case "Add_Role":
                addRole();
                return;
            
            case "Add_Employee":
                addEmployee();
                return;

            case "Update_Employee_Role":
                updateRole();
                return;

            case "View_Departments":
                viewAllDepartments();
                return;

            case "View_Roles":
                viewAllRoles();
                return;

            case "View_Employees":
                viewAllEmployees();
                return;
            
            default:
                connection.end();

        }

    })
};

start();


function addDepartment() {
    
    inquirer.prompt([
        {
            name: "deptName",
            type: "input",
            message: "What department do you want to add?"
        }
    ]).then( (  ) => {
        addDepartment();
        if (err) throw err;
        console.log("Department added successfully!");
        start();
    })

};

function addRole() {

    db.getDepartments().then( (department) => {

        const departmentList = department.map( (department) => ({
            value: department.id,
            name: department.dept_name

        }) )

        inquirer.prompt([
            {
                name: "whatDepartment",
                type: "list",
                message: "What department does this role belong to?",
                choices: departmentList
            },
            {
                name: "whatRole",
                type: "input",
                message: "What role would you like to add?"
            },
            {
                name: "salary",
                type: "input",
                message: "What is the salary?"
            }
        ]).then( ( ) => {
            addRole();
            if (err) throw err;
            console.log("That role has been added!");
            start();
            
        })
    })

};

function addEmployee() {

};

function updateRole() {

};

function viewAllDepartments() {

    db.getDepartments().then( (results) => {
        console.table(results);
        start();
    });

};

function viewAllRoles() {

    db.getDepartments().then((results) => {
       console.table(results);
       start();
    }); 

};

function viewAllEmployees() {

    db.getEmployees().then((results) => {
        console.table(results);
        start();
    });


};

