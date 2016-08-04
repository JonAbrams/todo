$(function () {
  $('.add-todo').on('click', function () {
    var newTodo = $('.todo').first().clone();
    newTodo.find('.todo-text').val('');
    newTodo.appendTo('.todo-list');
  });
});
