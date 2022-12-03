/* exported firstChars */
function firstChars(length, string) {
  var newString = '';
  var lengthIfTooLong = string.length;
  if (string === '') {
    return newString;
  }
  if (string.length < length) {
    length = lengthIfTooLong;
  }
  for (var i = 0; i < (string.length); i++) {
    newString += string[i];
    if (newString.length === length) {
      return newString;
    }
  }
}
