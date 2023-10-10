

// Include necessary packages
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// Array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'Enter your project title:',
  },
  {
    type: 'input',
    name: 'description',
    message: 'Describe your project',
  },
  {
    type: 'input',
    name: 'installation',
    message: 'What are the steps required to install your project? Provide a step-by-step description',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Provide instructions and examples for use.',
  },
  {
    type: 'confirm',
    name: 'addScreenshots',
    message: 'Do you want to add screenshots to your README?',
    default: false, 
  },
  {
    type: 'input',
    name: 'filename',
    message:
      'Enter the filenames of the screenshots separated by commas (e.g., screenshot1.png, screenshot2.jpg):',
    when: (answers) => answers.addScreenshots, // Only ask this question if the user wants to add screenshots
  },
  {
    type: 'input',
    name: 'credits',
    message: 'List your collaborators, if any, with links to their GitHub profiles.',
  },
  {
    type: 'list',
    name: 'license',
    message: 'Choose a license for your application:',
    choices: ['MIT', 'Apache 2.0', 'GPL', 'BSD', 'None'], 
  },
  {
    type: 'input',
    name: 'tests',
    message: 'What Tests were performed?',
  },
  {
    type: 'input',
    name: 'gitusername',
    message: 'What is your Github user name?',
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is your Email?',
  },
];

// Function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      console.error('Error writing to file:', err);
    } else {
      console.log('README.md successfully generated!');
    }
  });
}

// Function to initialize the app
function init() {
  inquirer
    .prompt(questions)
    .then((userResponses) => {
      const readmeContent = generateMarkdown(userResponses);
      writeToFile('README.md', readmeContent);
    })
    .catch((err) => console.error('Error:', err));
}

// Call the init() function to start the application
init();
