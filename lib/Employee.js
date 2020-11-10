// TODO: Write code to define and export the Employee class

const inquirer = require("inquirer");

class Employee {
    constructor (name,id,email,role) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.role = role;
    }

    start() {
        inquirer
        .prompt([
            {
            type: "input",
            name: "userName",
            message: "What is your name?"
            },
            {
            type: "input",
            name: "id",
            message: "What is your ID"
            },
            {
            type: "input",
            name: "email",
            message: "What is your email?"
            },
            {
            type: "list",
            name: "role",
            message: "What is your role?",
            choices: ["Manager","Engineer","Intern"]
            }
        ])
        .then((answer) => {
            this.name = answer.userName;
            console.log(this.name);

            this.id = answer.id;
            console.log(this.id);

            this.email = answer.email;
            console.log(this.email);

            this.role = answer.role;
            console.log(this.role);
        });
    }

    getName(name) {
        return this.name;
    }

    getId(id) {
        return this.id;
    }

    getEmail(email) {
        return this.email
    }

    getRole(role) { // Returns 'Employee'
        return Employee.name;
    }
};

module.exports = Employee;