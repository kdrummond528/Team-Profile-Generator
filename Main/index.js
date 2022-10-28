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

const teamMembers = [];

function startApp() {
  addEmployee();
}

// function to add employees
function addEmployee() {
  inquirer.prompt([
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
    .then(function ({ role }) {
      if (role === "Manager")
        inquirer.prompt([
          {
            type: "input",
            message: "What is the employee's office phone number?",
            name: "phone",
          }
        ]);
      if (role === "Engineer")
        inquirer.prompt([
          {
            type: "input",
            message: "What is the employee's GitHub?",
            name: "github",
          }
        ]);
      if (role === "Intern")
        inquirer.prompt([
          {
            type: "input",
            message: "What school did/does the employee go to?",
            name: "school",
          }])
          .then(inquirer.prompt([{
            type: "list",
            message: "Would you like to add another employee?",
            choices: ["Yes", "No"],
            name: "new member",
          }
          ]))
      // teamMembers.push(newMember);
    })
}


// newMember();

// function newMember() {
//   inquirer.prompt([
//     {
//       type: "list",
//       message: "Would you like to add another employee?",
//       choices: ["Yes", "No"],
//       name: "new member",
//     }
//   ]);
// }



// add more employees
// push employees to html


// function startApp() {
//   inquirer
//     .prompt(
//       {
//         type: "list",
//         message: "What type of employee would you like to add?",
//         choices: ["Manager", "Engineer", "Intern", "Exit"],
//         name: "employee",
//       })
//     .then((employeeType) => {
//       // console.table(employeeType)
//       if (employeeType.choice === "Manager") {
//         managerPrompt();
//       }
//       if (employeeType.choice === "Engineer") {
//         engineerPrompt();
//       }
//       if (employeeType.choice === "Intern") {
//         internPrompt();
//       }
//       if (employeeType.choice === "Exit") {
//         // to end adding
//       }
//     });
// }


// function for creating manager - inquirer questions
// take user provided answers and create a new manager
// push that new manager to the team members array
// function managerPrompt() {
//   inquirer.prompt([
//     {
//       type: "input",
//       message: "What is your name?",
//       name: "name",
//     },
//     {
//       type: "input",
//       message: "What is your ID number?",
//       name: "id",
//     },
//     {
//       type: "input",
//       message: "What is your email address?",
//       name: "email",
//     },
//     {
//       type: "input",
//       message: "What is your office phone number?",
//       name: "phone",
//     }
//   ])
//     .then((answers) => {
//       // use user feedback for manager info
//       const manager = new Manager(
//         answers.name,
//         answers.id,
//         answers.email,
//         answers.officeNumber
//       )
//       console.table(manager)
//       teamMembers.push(manager);
//       startApp();

//       // .catch((error) => {
//       //   if (error.isTtyError) {
//       //     // Prompt couldn't be rendered in the current environment
//       //   } else {
//       //     // Something else went wrong
//       //   }
//       // });
//     });
// }

// function for creating engineer - inquirer questions
// take user provided answers and create a new engineer
// push that new engineer to the team members array
// function engineerPrompt() {
//   inquirer.prompt([
//     {
//       type: "input",
//       message: "What is your name?",
//       name: "name",
//     },
//     {
//       type: "input",
//       message: "What is your ID number?",
//       name: "id",
//     },
//     {
//       type: "input",
//       message: "What is your email address?",
//       name: "email",
//     },
//     {
//       type: "input",
//       message: "What is your GitHub?",
//       name: "github",
//     }
//   ])
//     .then((answers) => {
//       // use user feedback for engineer info
//       const engineer = new Engineer(
//         answers.name,
//         answers.id,
//         answers.email,
//         answers.github
//       )

//       console.table(engineer)
//       teamMembers.push(engineer);
//       startApp();

//       // .catch((error) => {
//       //   if (error.isTtyError) {
//       //     // Prompt couldn't be rendered in the current environment
//       //   } else {
//       //     // Something else went wrong
//       //   }
//       // });
//     });
// }

// function for creating intern - inquirer questions
// take user provided answers and create a new intern
// push that new intern to the team members array
// function internPrompt() {
//   inquirer.prompt([
//     {
//       type: "input",
//       message: "What is your name?",
//       name: "name",
//     },
//     {
//       type: "input",
//       message: "What is your ID number?",
//       name: "id",
//     },
//     {
//       type: "input",
//       message: "What is your email address?",
//       name: "email",
//     },
//     {
//       type: "input",
//       message: "What school are you currently enrolled in?",
//       name: "school",
//     }
//   ])
//     .then((answers) => {
//       // use user feedback for intern info
//       const intern = new Intern(
//         answers.name,
//         answers.id,
//         answers.email,
//         answers.school
//       )

//       console.table(intern)
//       teamMembers.push(intern);
//       startApp();

//       // .catch((error) => {
//       //   if (error.isTtyError) {
//       //     // Prompt couldn't be rendered in the current environment
//       //   } else {
//       //     // Something else went wrong
//       //   }
//       // });
//     });
// }

// STRUCTURING IT

// start with manager function, since every team needs a manager
// at the end of manager function, call a createTeam function

// this function would simply ask the user which type of employee they 
// would like to add, based on their choice, run the corresponding function

// at the end, use fs to write file while sending the team array over to 
// the function you brought in from page-template.js

startApp();