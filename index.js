// TODO: Include packages needed for this application

const inquirer = require("inquirer");
const fs = require('fs');

const generateMarkdown = require("./utils/generateMarkdown.js");

// TODO: Create an array of questions for user input

const questions = [
    {
        type: "input",
        message: "What is the title of your project?",
        name: "title",
        },
        {
            type: "input",
            message: "Add a description to your project",
            name: "description",
        },
        {
            type: "input",
            message: "Add chapter numbers to your README table of contents(optional)",
            name: "contentsChapter",
        },
        {
            type: "input",
            message: "Add titles to your README table of contents(optional)",
            name: "contentsTitle",
        },
        {
            type: "input",
            message: "What packages are needed for you project?",
            name: "installation",
        },
        {
            type: "input",
            message: "what is the use case for your project?",
            name: "usage",
        },
        {
            type: "input",
            message: "Who are the collaborators on this project?",
            name: "credits",
        },
        {
            type: "lists",
            message: "What license is used for this project?",
            name: "license",
            choices: ["MIT", "Apache", "GNU", "None"]
        },
        {
            type: "input",
            message: "What badges are used?",
            name: "badges",
        },
        {
            type: "input",
            message: "List the features of your project.",
            name: "features",
        },
        {
            type: "input",
            message: "How can others contribute to your project?",
            name: "contributions",
        },
        {
            type: "input",
            message: "What tests have been done on your project?",
            name: "tests",
        }
 ];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    const readMePageContent = generateMarkdown(data);

    fs.writeFile(fileName, readMePageContent, (err) =>
      err ? console.log(err) : console.log('Successfully created README.md!')
    );
}

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt(questions)
    .then((response) => {
        console.log(response)
        writeToFile("README.md", response)
});
}

// Function call to initialize app
init();
