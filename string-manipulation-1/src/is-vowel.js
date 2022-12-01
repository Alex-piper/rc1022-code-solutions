/* exported isVowel */
function isVowel(char) {
  var vowels = 'AEIOU';
  var capitalizedChar = char.toUpperCase();
  var isVowel = false;
  for (var i = 0; i < vowels.length; i++) {
    if (vowels[i] === capitalizedChar[0]) {
      isVowel = true;
    }
  }
  return isVowel;
}
