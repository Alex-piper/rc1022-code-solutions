/* exported drop */
function drop(array, count) {
  var duplicateArray = array;
  var shorterArray = [];
  for (var i = count; i < duplicateArray.length; i++) {
    shorterArray.push(duplicateArray[i]);
  }
  return shorterArray;
}
