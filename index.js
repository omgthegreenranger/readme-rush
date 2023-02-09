// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const filePath = 'README2.MD';
let md = require('./assets/utils/generateMarkdown.js');
  
// TODO: Create an array of questions for user input

function firstQuestionnaire() {
    inquirer  
        .prompt ([
        {
            type:'input',
            message: 'Project Name',
            name: 'projectName',
        },
        {
            type:'multiline',
            message:'Describe the project:',
            name:'description',
        },
        {
            type:'input',
            message:'Installation instructions',
            name:'installation',
        },
        {
            type:'input',
            message:'Usage Instructions:',
            name:'usage',
        },
        {
            type:'input',
            message:'Contribution guidelines',
            name:'contributing',
        },
        {
            type:'list',
            message:'Pick a license:',
            name: 'license',
            choices: ["Apache license 2.0",
            "Creative Commons Attribution Share Alike 4.0",
            "Do What The F*ck You Want To Public License",
            "GNU General Public License v3.0",
            "MIT",
        ],
        },
        {
            type:'input',
            message:'Tests?',
            name:'tests',
        },
        {
            type:'input',
            message:'Additional questions?',
            name:'question',
        },])
        .then((data) => {
        questions = data;
    writeToFile(filePath, {projectName, description, installation, usage, contributing, license, tests, question} = data)})
    }
// TODO: Create a function to write README file


function writeToFile(filePath, questions) {
    const licenseBadge = md.renderLicenseBadge(license);
    console.log(licenseBadge);
    const template = `# ${projectName}

## Description

${description}
${licenseBadge}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#tests)


## Installation

${installation}

## Usage

${usage}

## License

${license}

## Contributing

${contributing}

## Tests

${tests}

## Questions

You can contact me at ${questions}`;

    fs.writeFile(filePath, template, function(err, result) {
        if(err) console.log('error', err);
    })
}

// TODO: Create a function to initialize app
function init() {
    firstQuestionnaire();

}

// Function call to initialize app
init();
