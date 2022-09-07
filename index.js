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
                    console.log("Please enter the manager's name.")
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is the managers ID number?',
            validate: inputId => {
                if (inputId) {
                    return true;
                } else {
                    console.log("Please enter the manager's id number")
                    return false;
                }
            }
        },
    ])
}