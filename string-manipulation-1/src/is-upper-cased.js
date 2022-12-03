/* exported isUpperCased */
function isUpperCased(word) {
  var allCaps = word.toUpperCase();
  if (word === allCaps) {
    return true;
  } else {
    return false;
  }
}
