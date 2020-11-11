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
                 message: "What school do/did you attend?"
                }
            ])
            .then((answer) => {
                this.school = answer.school;
                console.log(this.school);
                this.askToAdd();
            });     
    }

    getSchool(school) {
        return this.school;
    }

    getRole() {
        return 'Intern';
    }

    askToAdd() {
        inquirer
          .prompt([
            {
              type: "confirm",
              name: "choice",
              message: "Add another employee?"
            }
          ])
          .then((answer) => {
            // If the user says yes to another game, play again, otherwise quit the game
            if (answer.choice) {
                const Employee = require("./Employee");
                const newEmployee = new Employee();
                newEmployee.start();
            } else {
              console.log("Team Finished!");
            }
          });
      }
};

module.exports = Intern;