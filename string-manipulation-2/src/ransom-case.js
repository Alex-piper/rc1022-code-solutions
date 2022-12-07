/* exported ransomCase */
function ransomCase(string) {
  var evenOddString = '';
  for (var i = 0; i < string.length; i++) {
    if (i === 0) {
      evenOddString += string[0].toLowerCase();
    } else if (i % 2 === 1) {
      evenOddString += string[i].toUpperCase();
    } else {
      evenOddString += string[i].toLowerCase();
    }
  }
  return evenOddString;
}
