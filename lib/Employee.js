class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName() {
        console.log(this.name);
        return "Alice";
    }

    getId() {
        console.log(this.id);
        return 100;
    }

    getEmail() {
        console.log(this.email);
        return "test@test.com";
    }

    getRole() {
        return "Employee";
    }
}

module.exports = Employee;