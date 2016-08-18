function removeTodo (event) {
  debugger;
  var target = event.currentTarget;
  $(target).parent().remove();
}

function moveToCompleted (event) {
  var checkbox = $(event.currentTarget);
  var todo = checkbox.parent();
  todo.remove();
  todo.prependTo('#completed-list');
  todo.find('.todo-remove').on('click', removeTodo);
  checkbox.on('click', moveToCurrent);
}

function moveToCurrent (event) {
  var checkbox = $(event.currentTarget);
  var todo = checkbox.parent();
  todo.remove();
  todo.prependTo('#current-list');
  todo.find('.todo-remove').on('click', removeTodo);
  checkbox.on('click', moveToCompleted);
}

$(document).ready(function () {
  $('.add-todo').on('click', function () {
    var newTodo = $('.todo').first().clone();
    newTodo.removeClass('hide');
    newTodo.find('.todo-remove').on('click', removeTodo);
    newTodo.find('.todo-checkbox').on('click', moveToCompleted);
    newTodo.appendTo('#current-list');
  });
});
