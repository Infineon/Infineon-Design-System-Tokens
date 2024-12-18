const fs = require('fs');
const path = require('path');

const packageJson = require('./package.json');
const version = packageJson.version;

const filePath = path.resolve(__dirname, 'src/scss/_fonts.scss');
let fileContent = fs.readFileSync(filePath, 'utf8');

fileContent = fileContent.replace(/@[\w.-]+/, `@${version}`);

fs.writeFileSync(filePath, fileContent);

console.log(`Version ${version} applied to _fonts.scss`);
