// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const inquirer = require("inquirer");
const Employee = require("./Employee");

class Intern extends Employee {
    constructor(name,id,email,school) {
        super(name,id,email);
        this.school = school;
    }

    init() {
        inquirer
            .prompt([
                {
                 type: "input",
                 name: "school",
                 message: "What do/did you attend?"
                }
            ])
            .then((answer) => {
                this.school = answer.school;
                console.log(this.school);
            });     
    }

    getSchool(school) {
        return this.school;
    }

    getRole() {
        return 'Intern';
    }
};

module.exports = Intern;