/* exported numVowels */
function numVowels(string) {
  var lowerCased = string.toLowerCase();
  var counter = 0;
  for (var i = 0; i < lowerCased.length; i++) {
    if (lowerCased[i] === 'a' || lowerCased[i] === 'i' || lowerCased[i] === 'o' || lowerCased[i] === 'u' || lowerCased[i] === 'e') {
      counter += 1;
    }
  }
  return counter;
}
