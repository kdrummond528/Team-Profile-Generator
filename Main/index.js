const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const inquirer = require('inquirer');
const fs = require('fs');

const path = require('path');
const DIST_DIR = path.resolve(__dirname, 'dist');
const distPath = path.join(DIST_DIR, 'team.html');
const render = require('./src/page-template.js');
const { listenerAdded } = require('emittery');
const { debug } = require('console');

const teamMembers = [];

function startApp() {
  addEmployee();
}

// function to add employees
function addEmployee() {

  return inquirer.prompt([
    {
      type: "list",
      message: "What is the employee's role?",
      choices: ["Manager", "Engineer", "Intern"],
      name: "role",
    },
    {
      type: "input",
      message: "What is the employee's name?",
      name: "name",
    },
    {
      type: "input",
      message: "What is the employee's ID number?",
      name: "id",
    },
    {
      type: "input",
      message: "What is the employee's email address?",
      name: "email",
    }
  ])
    // .then(function ({ phone }) 
    // { employee.phone = phone; return employee })
    .then(function (employee) {
      if (employee.role === "Manager") {
        return inquirer.prompt([
          {
            type: "input",
            message: "What is the employee's office phone number?",
            name: "phone",
          }
        ]).then(function ({ phone }) { employee.phone = phone; return employee });
      }
      if (employee.role === "Engineer") {
        return inquirer.prompt([
          {
            type: "input",
            message: "What is the employee's GitHub?",
            name: "github",
          }
        ]);
      }
      if (employee.role === "Intern") {
        return inquirer.prompt([
          {
            type: "input",
            message: "What school did/does the employee go to?",
            name: "school",
          }
        ]);
      }
    })
    .then(function (employee) {
      console.log(employee);
      teamMembers.push(employee);


      inquirer.prompt([{
        type: "list",
        message: "Would you like to add another employee?",
        choices: ["Yes", "No"],
        name: "newMembers",
      }]).then(function () {
        //if yes 
        return addEmployee();

        //if no
        return;
      });

      console.log(teamMembers);
    })


}


startApp();