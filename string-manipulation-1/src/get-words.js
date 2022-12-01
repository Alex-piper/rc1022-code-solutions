/* exported getWords */
function getWords(string) {
  var wordsArray = [];
  var currentWord = '';
  if (string === '') {
    return wordsArray;
  }
  for (var i = 0; i < string.length; i++) {
    if (string[i] !== ' ') {
      currentWord += string[i];
    } else {
      wordsArray.push(currentWord);
      currentWord = '';
    }
  }
  wordsArray.push(currentWord);
  return wordsArray;
}
