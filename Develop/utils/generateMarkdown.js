
// Function to generate markdown for README
function generateMarkdown(data) {

  let screenshotSection = '';
  if (data.addScreenshots && data.filename) {
    const filenames = data.filename.split(',').map((filename) => filename.trim());
    screenshotSection = filenames
      .map((filename) => `![Screenshot](${filename})`)
      .join('\n');
  }
  
  // Define the license badge function
  function renderLicenseBadge(license) {
    // Define the badge URLs for each license type
    const licenseBadges = {
      MIT: '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
      'Apache 2.0': '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)',
    };

    // Check if the selected license has a corresponding badge URL
    if (license in licenseBadges) {
      return licenseBadges[license];
    } else {
      return ''; // Return an empty string if the license is not recognized
    }
  }

  let licenseSection = '';
  if (data.license === 'None') {
    licenseSection = 'This project is not licensed.';
  } else {
    // Insert the license badge and notice
    licenseSection = `## License
${renderLicenseBadge(data.license)}

This project is licensed under the ${data.license} License - see the [LICENSE](LICENSE) file for details.`;
  }

  return `# ${data.title}

## Description
${data.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}
Screenshots:
${screenshotSection}

## Credits
${data.credits}

## License
${licenseSection}

## Questions

If you have any questions or need further assistance with this project, feel free to contact the author:

- GitHub Profile: [${data.gitusername}](https://github.com/${data.gitusername})
- Email: [${data.email}](mailto:${data.email})

`;
}

module.exports = generateMarkdown;

