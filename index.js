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
