// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const filePath = 'README2.MD';
let md = require('./assets/utils/generateMarkdown.js');
  


// TODO: Create an array of questions for user input

function firstQuestionnaire() {
    console.log('\n\x1b[1mREADME RUSH\n\x1b[1m');
    console.log('\x1b[1mPlease answer the following questions:\x1b[1m \x1b[90m(press Enter to leave blank)\x1b[90m');
    console.log('\x1b[1m---------------\x1b[1m\n');
    inquirer  
        .prompt ([
        {
            type:'input',
            message: 'Project Name:',
            name: 'projectName',
        },
        {
            type: 'input',
            message:'Github:',
            name: 'github',
        },
        {
            type: 'input',
            message: 'Email:',
            name: 'email',
        },
        {
            type:'input',
            message:'Description:',
            name:'description',
        },
        {
            type:'input',
            message:'Installation:',
            name:'installation',
        },
        {
            type:'input',
            message:'Usage:',
            name:'usage',
        },
        {
            type: 'confirm',
            message: 'Do you want custom contribution guidelines?',
            name: 'contributeyn',

        },
        {
            type:'input',
            message:'Contribution guidelines:',
            name:'contributing',
            when: (answers) => {
                if(answers.contributeyn) {
                    return true;
            } else if (!answers.contributeyn) {
                        answers.contributing = "Any contributions or participation in this project is bound by the [Contributor Covenant](https://www.contributor-covenant.org/).";
                    }
            }
        },
        {
            type:'list',
            message:'License:',
            name: 'license',
            choices: ["Apache license 2.0",
            "Creative Commons Attribution Share Alike 4.0",
            "Do What The F*ck You Want To Public License",
            "GNU General Public License v3.0",
            "MIT",
            ],
        },
        {
            type: 'confirm',
            message: 'Do you want to include tests?',
            name: 'testyn',

        },
        {
            type:'input',
            message:'Tests?',
            name:'tests',
            when: (answers) => {
                if(answers.testyn) {
                    return true;
            } else if (!answers.testyn) {
                        answers.tests = "No tests currently available for this project.";
                    }
            }
        },
])
        .then((data) => {
        questions = data;
    writeToFile(filePath, {projectName, github, email, description, installation, usage, contributing, license, tests} = data)})
    }
// TODO: Create a function to write README file


function writeToFile(filePath, questions) {
    const licenseBadge = md.renderLicenseBadge(license);
    const template = `# ${projectName}

## Description

Project created by: [${github}](https://www.github.com/${github})

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

See [License](./LICENSE) for full text.

## Contributing

${contributing}

## Tests

${tests}

## Questions

For answers to any burning questions, you can contact me at;

Email: ${email}

Github: https://www.github.com/${github}`;

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
