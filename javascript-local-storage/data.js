/* exported todos */

var todos = [];
var previousTodosJson = localStorage.getItem('javascript-local-storage');
todos = JSON.parse(previousTodosJson);
addEventListener('beforeunload', handleUnload);
function handleUnload() {
  var todosJson = JSON.stringify(todos);
  localStorage.setItem('javascript-local-storage', todosJson);
}
