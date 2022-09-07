// call to template page
const createPage = require('./src/template');

// call to employee profiles
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern');

// nodes
const fs = require('fs');
const inquirer = require('inquirer');

// array for employees
const empArray = [];

// manager prompts
const addEmployeeManager = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of the team manager?',
            validate: inputName => {
                if (inputName) {
                    return true;
                } else {
                    console.log("Please enter the manager's name!")
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "What is the manager's ID number?",
            validate: inputId => {
                if (inputId) {
                    return true;
                } else {
                    console.log("Please enter the manager's id number!")
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the manager's email?",
            validate: inputEmail => {
                if (inputEmail) {
                    return true;
                } else {
                    console.log("Please enter the manager's email!")
                    return false;
                }
            }  
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "What is the manager's office phone number?",
            validate: inputOfficeNumber => {
                if (inputOfficeNumber) {
                    return true;
                } else {
                    console.log("Please enter the manager's office phone number!")
                    return false;
                }
            }  
        }   
    ])
    .then(inputManagerData => {
        const manager = new Manager (inputManagerData.name, inputManagerData.id, inputManagerData.email, inputManagerData.officeNumber);
        empArray.push(manager);
    })
};

// prompts for either engineer or intern
const addEitherEngInt = () => {
    console.log(`
    -------------------------------

    Add Remaining Employees to Team

    -------------------------------
    `);

    return inquirer.prompt([
        {
            type: 'list',
            name: 'role',
            message: 'Please choose role for next employee',
            choices: ['Engineer', 'Intern']
        },
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of the employee?',
            validate: inputName => {
                if (inputName) {
                    return true;
                } else {
                    console.log("Please enter the employee's name!")
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "What is the employee's ID number?",
            validate: inputId => {
                if (inputId) {
                    return true;
                } else {
                    console.log("Please enter the employee's id number!")
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the employee's email?",
            validate: inputEmail => {
                if (inputEmail) {
                    return true;
                } else {
                    console.log("Please enter the employee's email!")
                    return false;
                }
            }  
        },
        {
            type: 'input',
            name: 'github',
            message: "What is the engineer's github?",
            when: (input) => input.role === "Engineer",
            validate: inputGithub => {
                if (inputGithub) {
                    return true;
                } else {
                    console.log("Please enter the engineer's github!")
                    return false;
                }
            }  
        },
        {
            type: 'input',
            name: 'school',
            message: "What is the intern's school?",
            when: (input) => input.role === "Intern",
            validate: inputSchool => {
                if (inputSchool) {
                    return true;
                } else {
                    console.log("Please enter the intern's school!")
                    return false;
                }
            }  
        },
        // verify if more employees need to be added
        {
            type: 'confirm',
            name: 'confirmNewEmployee',
            message: 'Would you like to add another employee?',
            default: false 
        }
    ])
    .then(inputEmployeeData => {
        if ('role' === 'Engineer') {
            const employee = new Engineer (inputEmployeeData.name, inputEmployeeData.id, inputEmployeeData.email, inputEmployeeData.github);
            empArray.push(employee);
        } else if ('role' === 'Intern') {
            const employee = new Intern (inputEmployeeData.name, inputEmployeeData.id, inputEmployeeData.email, inputEmployeeData.school);
            empArray.push(employee);
        }

        if ('confirmNewEmployee' === 'Yes') {
            return addEitherEngInt(empArray);
        } else {
            return empArray;
        }   
    })
};

// function that will create the html page 
const writeFile = data => {
    fs.writeFile('./dist/index.html', data, err => {
        if (err) {
            console.log(err);
            return;
        } else {
            console.log("The employee team profile has been completed! Please see index.html for finished product")
        }
    })
};

// call to generate html page
addEmployeeManager()
    .then(addEitherEngInt)
    .then(empArray => {
        return createPage(empArray);
    })
    .then(pageHTML => {
        return writeFile(pageHTML);
    })
    .catch(err => {
        console.log(err);
});