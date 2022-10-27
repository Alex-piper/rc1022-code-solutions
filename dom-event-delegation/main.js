var $tasklist = document.querySelector('.task-list');
$tasklist.addEventListener('click', handleClick);

function handleClick(event) {
  console.log('event.target:', event.target);
  console.log('event.target.tagName:', event.target.tagName);

  if (event.target && event.target.matches('button')) {
    var closest = event.target.closest('.task-list-item');
    console.log('closest.task-list-item', closest);
    closest.remove();
  }
}
