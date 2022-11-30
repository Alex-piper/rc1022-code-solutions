/* exported tail */
function tail(array) {
  var skippedFirstIndex = [];
  for (var i = 1; i < array.length; i++) {
    skippedFirstIndex.push(array[i]);
  }
  return skippedFirstIndex;
}
