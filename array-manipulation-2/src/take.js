/* exported take */
function take(array, count) {
  var shortenedArray = [];
  for (var i = 0; i < count; i++) {
    if (array.length === 0) {
      shortenedArray = [];
    } else {
      shortenedArray.push(array[i]);
    }
  }
  return shortenedArray;
}
