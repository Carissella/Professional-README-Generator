// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require("./Develop/utils/generateMarkdown")


// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input', 
        message: 'What is the title of your project?:',
        name: 'title',
        validate: (value) => {
            if(value === "") {
                return 'You MUST enter a title!';
            } return true;
        },
    }, 
    {
            type: 'input', 
            message: 'Enter your GitHub username here:',
            name: 'userName',
            validate: (value) => {
            if (value === '') {
                return 'You MUST enter a username!';
            } return true;
        },
    },
    {
            type: 'input', 
            message: 'Please enter your email address here:',
            name: 'email',
            validate: (value) => {
            if (value === '') {
                return 'You MUST enter a email address!';
            } return true;
        },
    },
    {
            type: 'input', 
            message: 'Please type the description of your project here:',
            name: 'description',
            validate: (value) => {
            if (value === '') {
                return 'You MUST enter a description!';
            } return true;
        },
    },
    {
        type: 'input', 
        message: 'Please enter the technologies used to build this project here:',
        name: 'technologies',
        validate: (value) => {
        if (value === '') {
            return 'You MUST enter a technologies used to build!';
        } return true;
        },
    },
    {
        type: 'input', 
        name: 'dependencies',
        message: 'Please enter any dependencies used to install the project:',
        default: 'npm i inquirer@8.2.4',
    },
    {
        type: 'list',
        message: 'Please choose a License for your project here:',
        choices: ['MIT', 'GPL3.0', 'APACHE2.0', 'None'],
        name: 'license',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please enter the usage information for your project:',
        validate: (value) => {
        if(value === ''){
            return 'You MUST enter how to use your project!';
        } return true;
        },
    },
    {
        type: 'input',
        name: 'contributers',
        message: 'Please enter your contributer guidelines here:',
    },
    {
        type: 'input',
        name: 'test',
        message: 'Please enter the commands to run tests for your project:',
        default: 'npm test',
    },
];


// TODO: Create a function to write README file


// TODO: Create a function to initialize app


// Function call to initialize app
init();
