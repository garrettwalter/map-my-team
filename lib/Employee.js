// TODO: Write code to define and export the Employee class

const inquirer = require("inquirer");

class employee {
    constructor (name,id,email) {
    this.name = name;
    this.id = id;
    this.email = email;
    }

    start() {
        this.getName();
    }

    getName() {
       inquirer
        .prompt([
            {
            type: "input",
            name: "userName",
            message: "What is your name?"
            }
        ])
        .then((answer) => {
            this.name = answer.userName;
            console.log(this.name);
            this.getId();
        });
    }

    getId() {
        inquirer
        .prompt([
            {
            type: "input",
            name: "id",
            message: "What is your ID"
            }
        ])
        .then((answer) => {
            this.id = answer.id;
            console.log(this.id);
            this.getEmail();
        });
    }

    getEmail() {
        inquirer
        .prompt([
            {
            type: "input",
            name: "email",
            message: "What is your email?"
            }
        ])
        .then((answer) => {
            this.email = answer.email;
            console.log(this.email);
            this.getRole();
        });

    }

    getRole() {// Returns 'Employee'
    inquirer
    .prompt([
        {
        type: "list",
        name: "role",
        message: "What is your role?",
        choices: ["Manager","Engineer","Intern"]
        }
    ])
    .then((answer) => {
        this.role = answer.role;
        console.log(this.role);
    });
    }
};

module.exports = employee;