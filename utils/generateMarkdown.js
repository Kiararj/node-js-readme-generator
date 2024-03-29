// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license === "MIT"){
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
  } 
  if(license === "Apache"){
    return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
  }
  if(license === "GNU"){
    return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
  }
  else{
    return '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license === "MIT"){
    return 'https://opensource.org/licenses/MIT';
  } 
  if(license === "Apache"){
    return 'https://opensource.org/licenses/Apache-2.0';
  }
  if(license === "GNU"){
    return 'https://www.gnu.org/licenses/gpl-3.0';
  } else{
  return '';
}
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license){
    const licenseLink = renderLicenseLink(license);
    const licenseBadge = renderLicenseBadge(license);
    return `## License\
    ${licenseBadge}\ 
    ${licenseLink} \ 
    ${license}`
  } else {
    return '';
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
## Description
${data.description}

## Table of Contents (Optional)
| Chapter | Chapter Title |
| ${data.contentsChapter} | ${data.contentsTitle} |

## Installation
${data.installation}

## Usage
${data.usage}

## Credits
${data.credits}

${renderLicenseSection(data.license)}

## Badges
${data.badges}

## Features
${data.features}

## How to Contribute
${data.contributions}

## Tests
${data.tests}
`
}

module.exports = generateMarkdown;
