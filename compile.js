const sass = require('sass');
const fs = require('fs');

// Compile SCSS to CSS
sass.render({
  file: 'custom.scss',   // Path to your main SCSS file
  outFile: 'custom.css', // Path for the output CSS file
  sourceMap: true       // Optional: Generate a source map
}, function(error, result) {
  if (!error) {
    // If no error, write the result to the output CSS file
    fs.writeFileSync('custom.css', result.css);
    console.log('SCSS compiled to CSS successfully.');
  } else {
    // Handle error
    console.error('Error:', error.message);
  }
});