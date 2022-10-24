function convertMinutesToSeconds(minutes) {
  var product = minutes * 60;
  return product;
}
var toSeconds = convertMinutesToSeconds(5);
console.log('converting minutes to seconds result:', toSeconds);

function greet(name) {
  var greeting = 'Hey, ' + name;
  return greeting;
}
var greetName = greet('Beavis');
console.log('the value of the greet function at name Beavis is:', greetName);

function getArea(width, height) {
  var product = width * height;
  return product;
}
var area = getArea(17, 42);
console.log('the value of the area is:', area);

function getFirstName(person) {
  var firstName = person.firstName;
  return firstName;
}
var getFirstNameResult = getFirstName({ firstName: 'lelouch', lastName: 'Lamprouge' });
console.log('getFirstNameResult', getFirstNameResult);

function getLastElement(array) {
  var lastElement = array[array.length - 1];
  return lastElement;
}
var element = getLastElement(['propane', 'and', 'propane', 'accessories']);
console.log('the value of the last element is:', element);
