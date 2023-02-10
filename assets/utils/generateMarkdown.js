// import { Octokit } from "octokit";

// const ghToken = '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';
const licenseList = [{
    "name": "Apache license 2.0",
    "code": "apache-2.0",
    "url": '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]'
},
{
  "name": "Creative Commons Attribution Share Alike 4.0",
  "code": "cc-by-sa-4.0",
  "url": '[![License: CC BY-SA 4.0](https://licensebuttons.net/l/by-sa/4.0/80x15.png)]'
},
{
  "name": "Do What The F*ck You Want To Public License",
  "code": "wtfpl",
  "url": '[![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)](http://www.wtfpl.net/about/)'
},
{
  "name": "GNU General Public License v3.0",
  "code": "gpl-3.0",
  "url": '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'
},
{
  "name": "MIT",
  "code": "mit",
  "url": '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
}];

const {name, code, url} = licenseList;

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string


function renderLicenseBadge(license) {

  for (i = 0; i < licenseList.length; i++) {
    if(licenseList[i].name==license){
      licenseBadge = licenseList[i].url;
      return licenseBadge;
    }
  }
};

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

module.exports = {generateMarkdown, renderLicenseBadge};
