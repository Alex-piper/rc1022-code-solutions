/* exported reverseWord */
function reverseWord(word) {
  var reversedWord = '';
  for (var i = 0; i < word.length; i++) {
    reversedWord = word[i] + reversedWord;
  }
  return reversedWord;
}
