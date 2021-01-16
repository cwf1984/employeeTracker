const db = require("./db");
const connection = require("./db/connection");
const functions = require("./db/index");
const inquirer = require("inquirer");
const cTable = require("console.table");
const logo = require("asciiart-logo");

function start() {
    return inquirer.prompt({
        name: "whatToDo",
        type: "list",
        message: "What would you like to do?",
        choices: [
            "Add a Department",
            "Add a Role",
            "Add an Employee",
            "Update an Employee Role",
            "View All Departments",
            "View All Roles",
            "View All Employees",
            "Exit"
        ]
    }).then( function(answer) {
        console.log(answer);

        switch( answer.whatToDo ) {

            case "Add a Department":
                addDepartment();
                break;

            case "Add a Role":
                addRole();
                break;
            
            case "Add an Employee":
                addEmployee();
                break;

            case "Update an Employee Role":
                updateRole();
                break;

            case "View All Departments":
                viewAllDepartments();
                break;

            case "View All Roles":
                viewAllRoles();
                break;

            case "View All Employees":
                viewAllEmployees();
                break;

            default:
                console.log("hit default");
                connection.end();


        }

    })
};



function addDepartment() {
    
    return inquirer.prompt([
        {
            name: "addDept",
            type: "input",
            message: "What department do you want to add?"
        }
    ]).then( ( answer ) => {
        addDepartment();
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
    db.getRoles().then( (role) => {
        
        const roleList = role.map( (role) => ({
            value: role.id,
            name: role.title
        }))

    })

    db.getManager().then( (managers) => {
        const managerList = managers.map( (managers) => ({
            value: role.id,
            firstName: employee.first_name,
            lastName: employee.last_name
        }))
    })

    inquirer.prompt([
        {
            name: "firstName",
            type: "input", 
            message: "What is thier first name?"
        }, 
        {
            name: "lastName",
            type: "input",
            message: "What is their last name?"
        },
        {
            name: "empRole",
            type: "list",
            message: "What is their role?",
            choices: roleList
        },
        {
            name: "empManager",
            type: "list",
            message: "Who is their manager?",
            choices: allManagers
        }
    ]).then( (answer) => {
        addEmployee();
        if (err) throw err;
        console.log("Your new employee has been added!");
        start();
    })

}



    // access other employees to find all managers and get manager id

    //ask for first name
    //ask for last name
    //ask for role (in list)
    //ask for manager (in list)
    //all managers in own table



// function updateRole() {

    // db.getEmployees().then( (role) => {
    //     const roleList = role.map( (role) => ({
    //         value: role.id,
    //         name: role.title
    //     }) );

    //access all employees
    //pick employee to update
    //choose new role from list
    



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


start();