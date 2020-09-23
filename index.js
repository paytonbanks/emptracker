var mysql = require("mysql");
var inquirer = require("inquirer");

// --  SERVER CONNECTION & CONFIRMATION -- //
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "",
    database: "employee_db"
});

connection.connect(function(err) {
    if (err) throw err;
    console.log("Connected! Server as id " + connection.threadId + "\n");
    start();
})

// -- APPLICATION START -- //
function start() {
    inquirer.prompt([
        {
            type: "checkbox",
            message: "What would you like to do?",
            name: "options",
            choices: [
                "View all Employees?",
                "View all Personas",
                "View all Departments",
                "Add a new Employee",
                "Add a new Persona",
                "Update Employee Personas",
                "Add a new Department",
                "View Budgets and Employee Salaries",
                "Click Here to Exit"
            ]
        }])
        .then(function (answer) {
            switch (answer.options) {
                case "View all Employees?":
                    viewEmployees();
                    break;
                case "View all Personas":
                    viewPersonas();
                    break;
                case "View all Departments":
                    viewDepartments();
                    break;
                case "Add a new Employee":
                    addEmployee();
                    break;
                case "Add a new Persona":
                    addPersona();
                    break;
                case "Update Employee Personas":
                    selectEmp();
                    break;
                case "Add a new Department":
                    addDepartment();
                    break;
                case "Click Here to Exit":
                    connection.end();
                    break;
            }
        });
};

// -- VIEWS -- //
function viewEmployees() {
    connection.query(`SELECT * FROM employee`, function (err, res) {
        if (err) throw err;
        console.table(res);
        start();
    })
};

function viewPersonas() {
    connection.query(`SELECT * FROM persona`, function (err, res) {
        if (err) throw err;
        console.table(res);
        start();
    })
};

function viewDepartments() {
    connection.query(`SELECT * FROM department`, function (err, res) {
        if (err) throw err;
        console.table(res);
        start();
    })
};




// -- ADDITIONS -- // ---  departments, personas, employees --- //


// -- UPDATES -- // -- employees, roles //


// -- DELETIONS -- // -- employee,


// function addEmployee() {
//     prompt([

//         {
//             name: "first_name",
//             message: "Please enter the First Name."
//         }, 
//         {
//             name: "last_name",
//             message: "Please enter the Last Name.",
//         },
//         {
//             type: "checkbox",
//             name: "role",
//             message: "What is the Role of the employee?",
//             choices: [
//                 "Vice President",
//                 "Managing Director",
//                 "Regional Manager",
//                 "Sales Manager",
//                 "Sales Person",
//                 "Sales Assistant",
//                 "Intern"
//                 ]
//         },
//     ]).then(function (response) {
//         if (response.selection === 'ADD New Employees') {
//             addEmployee();
//         } else if (response.selection === 'EXIT')
//             addEmployee();
//     });


// };