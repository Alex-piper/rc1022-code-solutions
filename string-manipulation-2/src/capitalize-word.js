/* exported capitalizeWord */
function capitalizeWord(word) {
  var nowCapitalized = '';
  if (word.toUpperCase() === 'JAVASCRIPT') {
    return 'JavaScript';
  }
  for (var i = 0; i < word.length; i++) {
    if (i === 0) {
      nowCapitalized += word[0].toUpperCase();
    } else {
      nowCapitalized += word[i].toLowerCase();
    }
  }
  return nowCapitalized;
}
