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
            type: "list",
            message: "What would you like to do?",
            name: "action",
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
            switch (answer.action) {
            case "View all Employees?": 
                viewEmployees(); 
                break;
            case "View all Personas":
                viewPersona();
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
            case "Exit the program here":
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

function viewPersona() {
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




// -- CREATE -- // ---  Employess, Persona & Department --- \\

function addEmployee() {
    connection.query("SELECT * FROM persona", function(err, res) {
        if (err) 
        throw err;
        console.log(results);
        inquirer.prompt([
            {
            name: "firstName",
            type: "input",
            message: "What is the employees First Name?"
            },
            {
            name: "lastName",
            type: "input",
            message: "What is the employees Last Name?"   
            },
            {
            name: "perosonaId",
            type: "list",
            message: "What will be the employee's work Persona?",
            choices: [
                "Salesperson",
                "Sales Manager",
                "Engineer",
                "Account Executive",
                "Vice President",
                "Regional Manager"
                ]
            }
        ])
    })
};

function addDepartment() {
    inquirer.prompt([
        {
        name: "addDepartment",
        message: "Enter Department Name?"
        }
    ]).then(function(answer) {
        connection.query(
            "INSERT INTO department SET ?", {
                name: answer.addDepartment
            },
            function(err, res) {
                if (err) throw err;
                console.log(" Department Added!\n");
                start();
            }
        );
    });

}


function addPersona() {
    connection.query("SELECT * FROM department", function(err, res) {
        if (err) throw err;
        inquirer.prompt([
            {
                name: "title",
                type: "input",
                message: "What is the Persona name?"
            },
            {
                name: "salary",
                type: "input",
                message: "What is the Salary?"
            },
            {
                name: "department_id",
                type: "rawlist",
                choices: res.map(item => item.department_name),
                message: "Select a Department?"
            },
        ]).then(function (answers) {
            const newDepartment = res.find(deparment => deparment.department_name === answers.department_id);
                connection.query("INSERT INTO persona SET ?",
                {
                    title: answers.title,
                    salary: answers.salary,
                    department_id: newDepartment.id 
                },
                function (err, res) {
                    if (err) throw err;
                    console.log("Peronsa Added");
                    start();
                }
            );    
        });          

    })

};


// -- UPDATES -- // -- employees, persona //
function updateEmployee() {
    connection.query(`SELECT * FROM employees`, function (err, res) {
      inquirer.prompt([
        {
          name: "update",
          type: "rawlist",
          message: "Which employee would you like to update?",
          choices: res.map(item => item.first_name, item.last_name, item.id)
      }
    ]).then(function (answer) {
        const employeeUpdate = res.find(item => item.id);
        console.log(employeeUpdate);
        updatedEmp(employeeUpdate);
      })
    })
  };
  
  function updatedEmp(thisid) {
    connection.query("SELECT * FROM persona", function (err, res) {
      inquirer.prompt([
        {
        type: "rawlist",
        name: "newPersona",
        message: "What is the new Persona?",
        choices: res.map(item => item.name, item.id)
      }
    ]).then(function (answer) {
        connection.query("UPDATE employees SET persona_id = ? WHERE id = ?", [answer.newPersona, thisid],
          function (err) {
            if (err) throw err;
            start();
          }
        );
      })
    })
  };



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