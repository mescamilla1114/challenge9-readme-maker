// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const { title } = require('process');
const generateMarkdown = require('./utils/generateMarkdown.js');
const markdown=  require('./utils/generateMarkdown.js');

const { writeFile } = require('fs').promises;


// TODO: Create an array of questions for user input
const questions = () =>{
  return inquirer.prompt([
    {
      type: 'input',
      name: 'title',
      message: 'Please enter your title',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Please enter your description',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'Please enter installation instructions',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Please enter usage instructions',
    },
    {
      type: 'list',
      name: 'license',
      message: 'Choose licensing information',
      choices: ['Apache- [![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)', 
      'GNU General Public- [![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)', 
      'MIT- [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)', 
      'None'],
    },
    {
      type: 'input',
      name: 'contributing',
      message: 'Add any contributor information',
    },
    {
      type: 'input',
      name: 'tests',
      message: 'Add any testing information',
    },
    {
      type: 'input',
      name: 'github',
      message: 'Add your github username',
    },
    {
      type: 'input',
      name: 'email',
      message: 'Add your email',
    },
  ]);
};

const makeMD = ({title, description, installation, usage, license,
  contributing, tests, github,email}) =>
  `# ${title}

  ## Description
 #### ${description}
  
  ## Table of Contents
  * [ Installation](#Installation)
  * [ Usage](###usage)
  * [ License](#License)
  * [ Contributors](#Contributors)
  * [ Testing](#Testing)
  * [ Questions](##Questions)

  ## Installation
  #### ${installation}

  ## Usage
  #### ${usage}

  ## License
  #### ${license}

  ## Contributors
  #### ${contributing}

  ## Testing
  #### ${tests}

  ## Questions
  #### ${github}
  #### ${email}
  `;


// TODO: Create a function to initialize app
function init() {
questions()  
.then((responses) => writeFile('README.md', makeMD(responses)))
.then(() => console.log('README written'))
.catch((err) => console.error(err));

}
/*
title test
description test
installation test
usage test
license test
contributors test
testing test
github test
email test
*/

// Function call to initialize app
init();
