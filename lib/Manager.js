// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const inquirer = require("inquirer");
const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name,id,email,officeNumber) {
        super(name,id,email);
        this.officeNumber = officeNumber;
    }

    init() {
        inquirer
            .prompt([
                {
                 type: "input",
                 name: "officeNumber",
                 message: "What is your office number?"
                }
            ])
            .then((answer) => {
                this.officeNumber = answer.officeNumber;
                console.log(this.officeNumber);
                this.askToAdd();
            });     
    }

    getOfficeNumber(officeNumber) {
        return this.officeNumber;
    }

    getRole() {
        return 'Manager';
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

module.exports = Manager;