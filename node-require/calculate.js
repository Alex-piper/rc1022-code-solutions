const add = require('./add');
const subtract = require('./subtract');
const divide = require('./divide');
const multiply = require('./multiply');

const args = process.argv;

const firstNumber = args.slice(2)[0];
const stringMethod = args.slice(2)[1];
const secondNumber = args.slice(2)[2];

const mathFunctions = {
  plus: add,
  minus: subtract,
  over: divide,
  times: multiply
};

function calculate(firstNumber, stringMethod, secondNumber) {
  let firstValue = 0;
  let secondValue = 0;

  if (firstNumber !== '0') {
    firstValue = Number(firstNumber);
  }

  if (secondNumber !== '0') {
    secondValue = Number(secondNumber);
  }

  for (const key in mathFunctions) {
    if (stringMethod === key) {
      return mathFunctions[key](firstValue, secondValue);
    }
  }

  for (const key in mathFunctions) {
    if (stringMethod !== key) {
      return 'invalid operation';
    }
  }
}

console.log('result:', calculate(firstNumber, stringMethod, secondNumber));
