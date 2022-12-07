/* exported capitalizeWords */
function capitalizeWords(string) {
  var newTitleCaseString = '';
  var currentWord = '';
  for (var i = 0; i < string.length; i++) {
    if (string[i] !== ' ' && currentWord === '') {
      currentWord += string[i].toUpperCase();
    } else if (string[i] !== ' ') {
      currentWord += string[i].toLowerCase();
    } else {
      newTitleCaseString += currentWord + ' ';
      currentWord = '';
    }
  }
  newTitleCaseString += currentWord;
  return newTitleCaseString;
}
