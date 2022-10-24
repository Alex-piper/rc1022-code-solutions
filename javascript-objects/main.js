var student = {
  firstName: 'Alex',
  lastName: 'Piper',
  age: 30
};

var fullName = student.firstName + student.lastName;

console.log('value of fullName:', fullName);
console.log('typeof fullName', typeof fullName);

student.livesInIrvine = false;
student.previousOccupation = 'college-student';

console.log('value of livesInIrvine:', student.livesInIrvine);
console.log('typeof livesInIrvine:', typeof student.livesInIrvine);

console.log('value of previous occupation:', student.previousOccupation);
console.log('typeof previousOccupation:', typeof student.previousOccupation);

var vehicle = {
  make: 'lexus',
  model: 'es300',
  year: '2000'
};

vehicle['color'] = 'white';
vehicle['isConvertible'] = false;

console.log('color value:', vehicle['color']);
console.log('typeof color', typeof vehicle['color']);

console.log('value of vehicle isConvertible:', vehicle['isConvertible']);
console.log('typeof isConvertible', typeof vehicle['isConvertible']);
console.log('value of vehicle:', vehicle);
console.log('typeof vehicle:', typeof vehicle);

var pet = {
  name: 'Luka',
  type: 'dog'
};
delete pet.name;
delete pet.type;
console.log('value of pet:', pet);
console.log('typeof pet:', typeof pet);
