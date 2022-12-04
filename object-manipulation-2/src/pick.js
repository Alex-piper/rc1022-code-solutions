/* exported pick */
function pick(source, keys) {
  var pickObject = {};
  var sourceKeys = Object.keys(source);
  for (var i = 0; i < sourceKeys.length; i++) {
    var sourceKey = sourceKeys[i];
    if (keys.includes(sourceKey) && source[sourceKey] !== undefined) { // ['foo', 'baz'].includes['foo',1]
      pickObject[sourceKey] = source[sourceKey];
    }
  }
  return pickObject;
}
