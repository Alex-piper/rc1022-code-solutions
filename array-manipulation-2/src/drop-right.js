/* exported dropRight */
function dropRight(array, count) {
  var duplicateArray = array;
  var shortenedArray = [];
  if (duplicateArray.length === 0) {
    return shortenedArray;
  }
  for (var i = 0; i < array.length - count; i++) {
    shortenedArray.push(array[i]);
  }
  return shortenedArray;
}
