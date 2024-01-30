const sass = require('node-sass');
const fs = require('fs');
const path = require('path');
const copyfiles = require('copyfiles');

const srcFile = './src/scss/_fonts.scss';
const destDir = './dist/fonts/';

// Render the SCSS to CSS
sass.render({ file: srcFile }, (err, result) => {
  if (err) throw err;

  const destPath = path.join(destDir, '_fonts.css');
  fs.writeFile(destPath, result.css, err => {
    if (err) throw err;

    // After writing the compiled CSS, copy the original SCSS
    copyfiles([srcFile, destDir], { up: true }, err => {
      if (err) throw err;
    });
  });
});
