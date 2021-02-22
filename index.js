const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const OUTPUT_DIR = path.resolve(__dirname, "output")
const outputPath = path.join(OUTPUT_DIR, "team.html");
const render = require("./src/page-template.js");


teamMembers = [];
idNumbers = [];

function starMenu() {
    function generateManager(){
        inquirer.prompt([
            {
                type: "input",
                name: "managerName",
                message: "Please input your manager's name:",
                validate: answer => {
                    if(answer !== "") {
                        return true;
                    }
                    
                    return "Please enter a valid character"
                }
            },

            {
               type: "input",
               name: "managerID",
               message: "Please input your manager's ID:",
               validate: answer => {
                const pass = answer.match(
                  /^[1-9]\d*$/
                );
                if (pass) {
                  return true;
                }
                return "Please enter a number greater than zero.";
              }
            },

            {
                type: "input",
                name: "managerEmail",
                message: "Please input your manager's e-mail:",
                validate: answer => {
                    const pass = answer.match(
                        /\S+@\S+\.\S+/
                    );
                 if (pass) {
                     return true;
                 }  

                 return "Please enter a valid e-mail."
                }
            },

            {
                type: "input",
                name: "managerOfficeNumber",
                message: "Please input your manager's office number:",
                validate: answer => {
                    const pass = answer.match(
                        /^[0-9]\d*$/
                    );
                    if (pass) {
                        return true;
                    }
                    return "Please enter a number."
                }
            },
        ]).then(answers => {
            const manager = new Manager(answers.managerName, answers.managerID, answers.managerEmail, answers.managerOfficeNumber);
            teamMembers.push(manager);
            idNumbers.push(answers.managerID);
            generateTeam();
        });
    };

    function generateTeam() {
        inquirer.prompt([
            {
                type: "list",
                name: "memberChoice",
                message: "Select which member to add next:",
                choices: [
                    "Engineer",
                    "Intern",
                    "Finish adding members"
                ]
            }
        ]).then(userChoice => {
            switch(userChoice.memberChoice) {
                case "Engineer":
                    addEngineer();
                    break;
                case "Intern":
                    addIntern();
                    break;
                case "Finish adding members":
                    buildTeam();
            }
        });
    };


    function addEngineer(){
        inquirer.prompt([
            {
                type: "input",
                name: "engineerName",
                message: "Please enter engineer's name:",
                validate: answer => {
                    if(answer !== "") {
                        return true;
                    }
                return "Please enter a valid character";
                }
            },

            {
                type: "input",
                name: "engineerID",
                message: "Please enter engineer's ID:",
                validate: answer => {
                    const pass = answer.match(
                        /^[1-9]\d*$/
                    );

                    if (pass) {
                        if(idNumbers.includes(answer)){
                            return "Thid number has already been taken.";
                        } else {
                            return true;
                        }
                    }
                    return "Please enter a number greater than zero."
                }
            },

            {
                type: "input",
                name: "engineerEmail",
                message: "Please enter engineer email:",
                validate: answer => {
                    const pass = answer.match(
                        /\S+@\S+\.\S+/
                    );
                    if (pass) {
                     return true;
                    }  

                 return "Please enter a valid e-mail."
                }
            },

            {
                type: "input",
                name: "engineerGithub",
                message: "Please enter engineer GitHub username:",
                validate: answer => {
                    if(answer !== "") {
                        return true;
                    }
                 return "Please enter a valid character";
                }
            }
        ]).then(answers => {
            const engineer = new Engineer(answers.engineerName, answers.engineerID, answers.engineerEmail, answers.engineerGithub);
            teamMembers.push(engineer);
            idNumbers.push(answers.engineerID);
            generateTeam();
        });
    };

    function addIntern() {
        inquirer.prompt([
            {
                type: "input",
                name: "internName",
                message: "Please enter intern name:",
                validate: answer => {
                    if(answer !== "") {
                        return true;
                    }
                 return "Please enter a valid character";
                }
            },

            {
                type: "input",
                name: "internID",
                message: "Please enter intern ID:",
                validate: answer => {
                    const pass = answer.match(
                        /^[1-9]\d*$/
                    );

                    if (pass) {
                        if(idNumbers.includes(answer)){
                            return "Thid number has already been taken.";
                        } else {
                            return true;
                        }
                    }
                    return "Please enter a number greater than zero."
                }
            },

            {
                type: "input",
                name: "internEmail",
                message: "Please enter intern email",
                validate: answer => {
                    const pass = answer.match(
                        /\S+@\S+\.\S+/
                    );
                    if (pass) {
                     return true;
                    }  

                 return "Please enter a valid e-mail."
                }
            },

            {
                type: "input",
                name: "internSchool",
                message: "Please enter intern's school:",
                validate: answer => {
                    if(answer !== "") {
                        return true;
                    };
                 return "Please enter a valid character";
                }
            }
        ]).then(answers => {
            const intern = new Intern(answers.internName, answers.internID, answers.internEmail, answers.internSchool);
            teamMembers.push(intern);
            idNumbers.push(answers.internID);
            generateTeam();
        })
    };

    function buildTeam() {
        console.log("Generating html page...")
        if (!fs.existsSync(OUTPUT_DIR)) {
          fs.mkdirSync(OUTPUT_DIR)
        };
        fs.writeFileSync(outputPath, render(teamMembers), "utf-8");
      };
    
      generateManager();
};

starMenu();