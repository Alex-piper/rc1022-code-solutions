/* exported omit */
function omit(source, keys) {
  var omitObj = {};
  var sourceKeys = Object.keys(source);
  for (var i = 0; i < sourceKeys.length; i++) {
    var sourceKey = sourceKeys[i];
    if (!keys.includes(sourceKey)) {
      omitObj[sourceKey] = source[sourceKey];
    }
  }
  return omitObj;
}
