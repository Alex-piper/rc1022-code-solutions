/* exported chunk */
function chunk(array, size) {
  var duplicateArray = array;
  var arrayOfChunks = [];
  var currentChunk = [];
  if (duplicateArray.length === 0) {
    return arrayOfChunks;
  }
  for (var i = 0; i < duplicateArray.length; i++) {

    if (currentChunk.length === size) {

      arrayOfChunks.push(currentChunk);
      currentChunk = [duplicateArray[i]];

    } else {
      currentChunk.push(duplicateArray[i]);

    }
  }
  arrayOfChunks.push(currentChunk);
  return arrayOfChunks;
}
