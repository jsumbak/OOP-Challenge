const inquirer = require('inquirer');
const fs = require('fs');

// const Manager = require('./lib/Manager');
// const Employee = require('./lib/Employee');
// const Engineer = require('./lib/Engineer');
// const Intern = require('./lib/Intern');


const managerQuestions = [
    {
        type: 'input',
        message: 'What is your team managers name?',
        name: 'name',
    },
    {
        type: 'input',
        message: 'What is your employee ID?',
        name: 'ID',
    },
    {
        type: "input",
        message: "What is your email address?",
        name: "email"
    },
    {
        type: "input",
        message: "What is your office number?",
        name: "number"
    },
    {
        type: 'list',
        message: 'Would you like to add an engineer or intern?',
        name: 'addEmployee',
        choices: ["Engineer",
            "Intern"
        ]
    },
];

const engineerQuestions = [
    {
        type: 'input',
        message: 'What is your name?',
        name: 'name',
    },
    {
        type: 'input',
        message: 'What is your employee ID?',
        name: 'ID',
    },
    {
        type: "input",
        message: "What is your email address?",
        name: "email"
    },
    {
        type: "input",
        message: "What is your GitHub username?",
        name: "username"
    },
];

const internQuestions = [
    {
        type: 'input',
        message: 'What is your name?',
        name: 'name',
    },
    {
        type: 'input',
        message: 'What is your employee ID?',
        name: 'ID',
    },
    {
        type: "input",
        message: "What is your email address?",
        name: "email"
    },
    {
        type: "input",
        message: "What is your school name?",
        name: "schoolName"
    },
];

inquirer.prompt(managerQuestions)
    .then((answers) => {
        console.log(answers)

        if (answers.addEmployee === "Engineer") {
            inquirer.prompt(engineerQuestions)
            .then((answers) => {
                console.log(answers)
            })
        } else if (answers.addEmployee === "Intern") {
            inquirer.prompt(internQuestions)
            .then((answers) => {
                console.log(answers)
            })
        }
    });
