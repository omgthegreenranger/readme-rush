# README RUSH

## Description

As per challenge readme:
>Create a command-line application that dynamically generates a professional README.md file from a user's input using the [Inquirer package](https://www.npmjs.com/package/inquirer/v/8.2.4). Review the [Professional README Guide](https://coding-boot-camp.github.io/full-stack/github/professional-readme-guide) as a reminder of everything that a high-quality, professional README should contain.

This script will generate the README requested (or rather, README2.md). It does not appear that Inquirer will allow for longer text (say, multiline, multiple paragraphs), which was unfortunate.

*As an added bonus*, I have used Inquirer's `when` property to put conditional prompts for both `tests` and `contibution guidelines.` If you answer "no" to either prompt, it will automatically enter boilerplate text for you. Otherwise, you can add your own. I have done this, as we may not have any specific data to include in their README.

## Installation

This script is a node package, and requires:

inquirer.js
fs.js

Please install as you would normally when using the script.

## Usage

Simply run `node index.js` and answer the prompts given. See video below

[Click here for a short video demonstrating use of the script](/assets/images/vokoscreenNG-2023-02-09_23-22-12.webm)
