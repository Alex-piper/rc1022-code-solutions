/* exported capitalize */
function capitalize(word) {
  var capitalizedWord = '';
  for (var i = 0; i < word.length; i++) {
    if (i === 0) {
      capitalizedWord += word[0].toUpperCase();
    } else {
      capitalizedWord += word[i].toLowerCase();
    }
  }
  return capitalizedWord;
}
