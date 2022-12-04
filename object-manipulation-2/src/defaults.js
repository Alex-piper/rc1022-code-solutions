/* exported defaults */
function defaults(target, source) {

  var targetKeys = Object.keys(target);
  var sourceKeys = Object.keys(source);

  for (var i = 0; i < sourceKeys.length; i++) {
    var eachSourceKey = sourceKeys[i];
    if (targetKeys.includes(eachSourceKey) === false) {
      target[eachSourceKey] = source[eachSourceKey];
    }
  }
  return target;
}
