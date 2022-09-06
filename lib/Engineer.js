// constructor for enginer pulling from employee constructor
const Employee = require('./Employee');

// the engineer constructor will extend from employeee constructor
class Engineer extends Employee {
    constructor(name, id, email, github) {
        // call to employee constructor
        super(name, id, email);

        // adding github
        this.github = github;
    }
}

module.exports = Engineer;