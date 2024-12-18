const fs = require('fs');
const path = require('path');

// Fetch the version from package.json
const packageJson = require('./package.json');
const version = packageJson.version;

const filePath = path.resolve(__dirname, 'src/scss/_fonts.scss');
let fileContent = fs.readFileSync(filePath, 'utf8');

// Define the regular expression to match the @VERSION placeholder or any existing version in the URL
const versionPattern = /(@infineon\/design-system-tokens@)(VERSION|[\w.-]+)/g;

// Replace the version placeholder or existing version with the new version
fileContent = fileContent.replace(versionPattern, `$1${version}`);

// Write the modified content back to the SCSS file
fs.writeFileSync(filePath, fileContent);

console.log(`Version ${version} applied to _fonts.scss`);
