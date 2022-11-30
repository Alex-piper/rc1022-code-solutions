const fs = require('fs');
const process = require('process');
const args = process.argv;

const userInput = args.slice(2).join('');

function displayText(input) {
  const readableName = './' + input;
  fs.readFile(readableName, 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
  });
}

console.log(displayText(userInput));
