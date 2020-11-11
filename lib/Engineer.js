// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const inquirer = require("inquirer");
const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name,id,email,github) {
        super(name,id,email);
        this.github = github;
    }

    init() {
        inquirer
            .prompt([
                {
                 type: "input",
                 name: "github",
                 message: "What is your GitHub username?"
                }
                
            ])
            .then((answer) => {
                this.github = answer.github;
                console.log(this.github);
                this.askToAdd();
            });     
    }

    getGithub(github) {
        return this.github;
    }

    getRole() {
        return 'Engineer';
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

module.exports = Engineer;