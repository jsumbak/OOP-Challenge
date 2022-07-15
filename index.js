const inquirer = require('inquirer');
const fs = require('fs');

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const team = []

/* Questions for manager*/
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
];

/* Questions for engineer*/
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

/* Questions for intern*/
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
        const newManager = new Manager(answers.name, answers.ID, answers.email, answers.number)
        team.push(newManager)
        menu()
    });

function menu() {
    inquirer.prompt({
        type: 'list',
        message: 'Would you like to add an engineer or intern?',
        name: 'addEmployee',
        choices: ["Engineer",
            "Intern",
            "Finish"
        ]
    }).then((answers) => {
        console.log(answers)

        if (answers.addEmployee === "Engineer") {
            inquirer.prompt(engineerQuestions)
                .then((answers) => {
                    console.log(answers)
                    const newEngineer = new Engineer(answers.name, answers.ID, answers.email, answers.username)
                    team.push(newEngineer)
                    menu()
                })
        } else if (answers.addEmployee === "Intern") {
            inquirer.prompt(internQuestions)
                .then((answers) => {
                    console.log(answers)
                    const newIntern = new Intern(answers.name, answers.ID, answers.email, answers.schoolName)
                    team.push(newIntern)
                    menu()
                })
        } else if (answers.addEmployee === "Finish") {
            console.log("Done")
            const formattedHTML = renderHTML(team) 
            fs.writeFileSync("./dist/index.html", formattedHTML)
        }
    });
}

// creating cards to show on actual webpage
function renderHTML(employee) {
    let HTML = ""
    for (let i = 0; i < employee.length; i++) {
        if (employee[i].getRole() === "Manager") {
            HTML = HTML + `<div class="card employee-card">
         <div class="card-header bg-secondary">
             <h2 class="card-title">${employee[i].name}</h2>
             <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>Manager</h3>
         </div>
         <div class="card-body">
             <ul class="list-group">
                 <li class="list-group-item">ID:${employee[i].id}</li>
                 <li class="list-group-item">
                     Email: <a href="mailto:${employee[i].email}">${employee[i].email}</a>
                 </li>
                 <li class="list-group-item">Office number:${employee[i].officeNumber}</li>
             </ul>
         </div>
     </div>`
        }
       
        if (employee[i].getRole() === "Engineer") {
            console.log(employee[i].getRole())
            HTML = HTML + `<div class="card employee-card">
         <div class="card-header bg-secondary">
             <h2 class="card-title">${employee[i].name}</h2>
             <h3 class="card-title"><i class="fas fa-glasses mr-2"></i>Engineer</h3>
         </div>
         <div class="card-body">
             <ul class="list-group">
                 <li class="list-group-item">ID:${employee[i].id}</li>
                 <li class="list-group-item">
                     Email: <a
                         href="mailto:${employee[i].email}">${employee[i].email}</a>
                 </li>
                 <li class="list-group-item">
                     GitHub:
                     <a href="${employee[i].github}" target="_blank"
                         rel="noopener noreferrer">${employee[i].github}</a>
                 </li>
             </ul>
         </div>
     </div>`

        }
        if (employee[i].getRole() === "Intern") {
            HTML = HTML + `<div class="card employee-card">
         <div class="card-header bg-secondary">
             <h2 class="card-title">${employee[i].name}</h2>
             <h3 class="card-title">
                 <i class="fas fa-user-graduate mr-2"></i>Intern
             </h3>
         </div>
         <div class="card-body">
             <ul class="list-group">
                 <li class="list-group-item">ID:${employee[i].id}</li>
                 <li class="list-group-item">
                     Email: <a href="mailto:${employee[i].email}">${employee[i].email}</a>
                 </li>
                 <li class="list-group-item">School:${employee[i].school}</li>
             </ul>
         </div>
     </div>`
        }
    }
    return `<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css"
            integrity="sha384-zCbKRCUGaJDkqS1kPbPd7TveP5iyJE0EjAuZQTgFLD2ylzuqKfdKlfG/eSrtxUkn" crossorigin="anonymous">
        <title>Document</title>
    </head>
    
    <body>
        <div class="container-fluid">
            <div class="row">
                <div class="col-12 mb-3 team-heading jumbotron bg-dark text-white">
                    <h1 class="text-center">My Team</h1>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div class="team-area col-12 d-flex justify-content-center">
                    ${HTML}
                </div>
            </div>
        </div>
    </body>
    
    </html>`
}