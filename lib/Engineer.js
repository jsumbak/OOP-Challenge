const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, id, email, github) {
         super(name, id, email);
        this.name = name;
        this.id = id;
        this.email = email;
        this.github = github;
    }

    getName() {
        console.log(this.name);
    }

    getId() {
        console.log(this.id);
    }

    getEmail() {
        console.log(this.email);
    }

    getGithub() {
        console.log(this.github);
        return "GitHubUser";
    }

    getRole() {
        return "Engineer";
    }
}

module.exports = Engineer;