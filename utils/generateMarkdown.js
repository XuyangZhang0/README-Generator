// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  //https://img.shields.io/badge/license-Apache--2.0-green
  //https://img.shields.io/badge/license-MIT-green
  //https://img.shields.io/badge/license-GPL--3.0-green
  switch (license) {
    case "MIT":
      return `https://img.shields.io/badge/license-MIT-green`;
      break;
    case "Apache-2.0":
      return `https://img.shields.io/badge/license-Apache--2.0-green`;
      break;  
    case "GPL-3.0":
      return `https://img.shields.io/badge/license-GPL--3.0-green`;
      break;
    default:
      return "";
      break;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  //https://www.gnu.org/licenses/gpl-3.0.en.html
  //http://www.apache.org/licenses/LICENSE-2.0
  //https://choosealicense.com/licenses/mit/
  switch (license) {
    case "MIT":
      return `https://choosealicense.com/licenses/mit/`;
      break;
    case "Apache-2.0":
      return `http://www.apache.org/licenses/LICENSE-2.0`;
      break;  
    case "GPL-3.0":
      return `https://www.gnu.org/licenses/gpl-3.0.en.html`;
      break;
    default:
      return "";
      break;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return `![${license}](${renderLicenseBadge(license)})
  ### [${renderLicenseLink(license)}](${renderLicenseLink(license)})
  `;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ## Description
  ${data.description}

  ## Table of Contents:
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## License
  ### ${renderLicenseSection(data.license)}

  ## Contributing
  ${data.contributing}

  ## Tests
  ${data.tests}
  
  ## Questions
  [Github Profile](https://github.com/${data.github}) | Send me an Email ${data.email}
`;
}

module.exports = generateMarkdown;
