var first = 1;
var second = 2;
var third = 3;
var maximumValue = Math.max(first, second, third);
console.log('the maximum value is:', maximumValue);
var heroes = ['Captain America', 'vision', 'ironman', 'Black Panther'];
var randomNumber = Math.random();
randomNumber = heroes.length * randomNumber;
var randomIndex = Math.floor(randomNumber);
console.log('randomIndex value:', randomIndex);
var randomHero = heroes[randomIndex];
console.log('randomHeroes value:', randomHero);

var library = [
  {
    title: 'Ender-Shadow',
    author: 'Orson Scott Card'
  },
  {
    title: 'Harry Potter',
    author: 'JK Rowling'
  },
  {
    title: 'Enders-Game',
    author: 'Orson Scott Card'
  }
];
var lastBook = library.pop();
console.log('lastBook value:', lastBook);
var firstBook = library.shift();
console.log('value of firstBook:', firstBook);

var js = {
  title: 'Javascript for Impatient Programmers',
  author: 'Dr.Axel Rauschmayer'
};

var css = {
  title: 'CSS Secrets',
  author: 'Lea Verou'
};

library.push(js);
library.unshift(css);
library.splice(1, 1);
console.log('library value:', library);

var fullName = 'Alex Piper';
var firstAndLastName = fullName.split(' ');
console.log('firstAndLastName value:', firstAndLastName);
var firstName = firstAndLastName[0];
var sayMyName = firstName.toUpperCase();
console.log('sayMyName:', sayMyName);
