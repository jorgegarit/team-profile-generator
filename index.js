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