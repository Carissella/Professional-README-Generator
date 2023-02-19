// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'None') {
    return '';
  } else if (license === "MIT") {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
  } else if (license === "APACHE2.0") {
    return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
  } return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'None') {
    return ''; 
  } else if (license === 'MIT') {
    return `[${license}](https://opensource.org/licenses/MIT)`;
  
  } else if (license === "APACHE2.0") {
    return `[${license}](https://opensource.org/licenses/Apache-2.0)`;
  }
  return `[${license}](https://www.gnu.org/licenses/gpl-3.0)`;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'None') {
    return ''
  } return `## License
  
  Copyright (c)`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}

  ## Table of Contents 
  * [Description](#description)
  * [Technologies](#technologies)
  * [Dependencies](#dependencies)
  * [Usage](#usage)
  * [Contributers](#contributers)
  * [Test](#test)
  * [License](#license)
  * [Questions](#questions)
  ## Description 
  ${data.description}
  ## Technolgies
  ${data.technologies}
  ## Dependencies  
  ${data.dependencies}
  ## Usage 
  ${data.usage}
  ## Contributers 
  ${data.contributers}
  ## Tests 
  Run ${data.test} to test the Readme generator.
  ${renderLicenseSection(data.license)}
  ${renderLicenseLink(data.license)}
  ## Questions 
  You can visit my Github Profile here: [${data.userName}](https://github.com/${data.userName}/) 
  If you have any questions please email me at ${data.email}
  `;
}

module.exports = generateMarkdown;
