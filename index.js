// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = [
  'What is your project title?', 
  'Please give a short description of you project.', 
  'What are the installation instructions?', 
  'Please include usage information.', 
  'Who contributed on this project?', 
  'What tests were run on this project?',
  'Please select a license for this project from the list.'];

  for (const question of questions) {
    console.log(question);
  }

// TODO: Create a function to write README file
function writeToFile(README, data) {
  
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;