const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');

const DIST_DIR = path.resolve(__dirname, 'dist');
const distPath = path.join(DIST_DIR, 'team.html');

const render = require('./src/page-template.js');

const teamMembers = [];


// function for creating manager - inquirer questions
function managerQuestions() {
  inquirer.prompt([
    {
      type: "input",
      message: "What is your name?",
      name: "name",
    },
    {
      type: "input",
      message: "What is your ID number?",
      name: "id",
    },
    {
      type: "input",
      message: "What is your email address?",
      name: "email",
    },
    {
      type: "input",
      message: "What is your office phone number?",
      name: "phone",
    }
  ])
    .then((answers) => {
      // use user feedback for manager info
      const manager = new Manager(
        answers.name,
        answers.id,
        answers.email,
        answers.officeNumber
      )
      console.table(manager)
      teamMembers.push(manager)

        .catch((error) => {
          if (error.isTtyError) {
            // Prompt couldn't be rendered in the current environment
          } else {
            // Something else went wrong
          }
        }

          // take user provided answers and create a new Manager
          // push that new Manager to the team members array

        );
    });
}

// follow the same pattern for each type of employee
// build a function for them that uses inquirer

// function for creating engineer - inquirer questions
function engineerQuestions() {
  inquirer.prompt([
    {
      type: "input",
      message: "What is your name?",
      name: "name",
    },
    {
      type: "input",
      message: "What is your ID number?",
      name: "id",
    },
    {
      type: "input",
      message: "What is your email address?",
      name: "email",
    },
    {
      type: "input",
      message: "What is your GitHub?",
      name: "github",
    }
  ])
    .then((answers) => {
      // use user feedback for engineer info
      const engineer = new Engineer(
        answers.name,
        answers.id,
        answers.email,
        answers.github
      )

      console.table(engineer)
      teamMembers.push(engineer)

        .catch((error) => {
          if (error.isTtyError) {
            // Prompt couldn't be rendered in the current environment
          } else {
            // Something else went wrong
          }
        }

          // take user provided answers and create a new Manager
          // push that new Manager to the team members array

        );
    });
}

// function for creating intern - inquirer questions
function internQuestions() {
  inquirer.prompt([
    {
      type: "input",
      message: "What is your name?",
      name: "name",
    },
    {
      type: "input",
      message: "What is your ID number?",
      name: "id",
    },
    {
      type: "input",
      message: "What is your email address?",
      name: "email",
    },
    {
      type: "input",
      message: "What school are you currently enrolled in?",
      name: "school",
    }
  ])
    .then((answers) => {
      // use user feedback for intern info
      const intern = new Intern(
        answers.name,
        answers.id,
        answers.email,
        answers.school
      )

      console.table(intern)
      teamMembers.push(intern)

        .catch((error) => {
          if (error.isTtyError) {
            // Prompt couldn't be rendered in the current environment
          } else {
            // Something else went wrong
          }
        }

          // take user provided answers and create a new Manager
          // push that new Manager to the team members array

        );
    });
}

function startApp() {
  inquirer.prompt(
    {
      type: "list",
      message: "What type of employee would you like to add?",
      choices: ["Manager", "Engineer", "Intern", "Exit"],
      name: "employee",
    }).then((frank) => {
      console.table(frank)
    })
}

startApp()
// STRUCTURING IT

// start with manager function, since every team needs a manager
// at the end of manager function, call a createTeam function

// this function would simply ask the user which type of employee they 
// would like to add, based on their choice, run the corresponding function

// at the end, use fs to write file while sending the team array over to 
// the function you brought in from page-template.js