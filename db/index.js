const connection = require("./connection");

module.exports = {

    getDepartments() {

        return connection.query( "SELCT * FROM department WHERE dept_Name" );

    },

    getRoles() {

        return connection.query( "SELECT * FROM role" );

    },

    getEmployees() {

        return connection.query( "SELECT * FROM employee" );
    },

    addDepartment (answer) {

        return connection.query( "INSERT INTO department SET ?", answer );

    },

    addRole(answer) {
        return connection.query( "INSERT INTO role SET ? ?", answer );
    },

    addEmployee( answer ) {
        return connection.query( "INSERT INTO employee SET ? ? ? ?", answer);
    },

    getManager( answer ) {
        return connection.query( "SELECT * FROM employees WHERE manager_id = NULL", answer);
    }

};