const inquirer = require('inquirer');
const fs = require('fs');

const Manager = require("./__tests__/Manager");
const Employee = require("./__tests__/Employee");
const Engineer = require("./__tests__/Engineer");
const Intern = require("./__tests__/Intern");

const questions = [
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
        choices: [ "Engineer",
        "Intern"
        ]
    },
];


inquirer.prompt(questions)
.then((answers) => {
    console.log(answers)
    fs.writeFile("ReadMe.md", generateMarkdown(answers), (err) => {
        if (err) {
            console.log(err)
        } else {
            console.log("success!");
        }
    });
});
