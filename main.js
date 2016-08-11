function removeTodo (event) {
  var target = event.currentTarget;
  $(target).parent().remove();
}

$(function () {
  $('.add-todo').on('click', function () {
    var newTodo = $('.todo').first().clone();
    newTodo.removeClass('hide');
    newTodo.find('.todo-remove').on('click', removeTodo);
    newTodo.appendTo('.todo-list');
  });
});
