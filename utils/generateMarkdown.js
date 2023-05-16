// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if (license !== 'None')  {
      return `![Github License](https://img.shields.io/badge/license-${license}-blue.svg)`
    }
    return '';
  }
  
  // TODO: Create a function that returns the license link
  // If there is no license, return an empty string
  function renderLicenseLink(license) {
    if (license !== 'None') {
      return `[License](#license)`
    } 
    return '';
  }
  
  // TODO: Create a function that returns the license section of README
  // If there is no license, return an empty string
  function renderLicenseSection(license) {
    if (license !== 'None') {
      return `## License
      This project is licensed under the ${license} license.`;
    }
    return '';
  }
  
  // TODO: Create a function to generate markdown for README
  function generateMarkdown(data) {
    return `# ${data.title}

    ${renderLicenseBadge(data.license)}
  
    ## Description
  
    ${data.description}
  
    ## Table of Contents

    * [Installation](#installation)
    * [Usage](#usage)
    ${renderLicenseLink(data.license)}
    * [Contributing](#contributing)
    * [Tests](#tests)
    * [Questions](#questions)

    ## Installation

    To install the necessary dependencies, please run the following commands:

    ${data.installation}

    ## Usage

    \`\`\`
    ${data.usage}
    \`\`\`

    ${renderLicenseSection(data.license)}

    ## Contributing

    ${data.contributing}

    ## Tests

    To run the proper tests, please use the following command:

    ${data.test}

    ## Questions

    If you have any questions about the repository, you can contact me at ${data.email}. 
    You can also check out my other projects at https://github.com/${data.github}
    `;
  }
  
  module.exports = generateMarkdown;