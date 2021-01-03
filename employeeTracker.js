const db = require("./db");
const connection = require("./db/connection");
const functions = require("./db/index");
const inquirer = require("inquirer");
const cTable = require("console.table");
const logo = require("asciiart-logo");

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
                break;

            case "Add_Role":
                addRole();
                break;
            
            case "Add_Employee":
                addEmployee();
                break;

            case "Update_Employee_Role":
                updateRole();
                break;

            case "View_Departments":
                viewAllDepartments();
                break;

            case "View_Roles":
                viewAllRoles();
                break;

            case "View_Employees":
                viewAllEmployees();
                break;
            
            default:
                connection.end();

        }

    })
};

// start();


function addDepartment() {
    
    inquirer.prompt([
        {
            name: "addDept",
            type: "input",
            message: "What department do you want to add?"
        }
    ]).then( ( answer ) => {
        index.addDepartment();
        if (err) throw err;
        console.log("Department added successfully!");
        start();
    });

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
        ]).then( ( answer ) => {
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

