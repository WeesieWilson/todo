

//EMPTY todo ARRAY
var toDo = []
//GRABBING THE todo IN THE INPUT
function getTodoFromDom() {
  var post = $('input[name="todo"]').val();
  return {
    post: post,
  }
}
//ADDING THE NEW todo TO THE EMPTY ARRAY
function addTodo(newTodo) {
  toDo.push(newTodo);
}
//GRABBING THE NEW ARRAY WITH NEW todo IN IT
function getTodo() {
  return toDo;
}
//ADDING THE NEW ARRAY TO THE DOM
function addTodoToDom(newTodo, templateStr, $target) {
    var todoTmpl = _.template(templateStr);
    $target.prepend(todoTmpl(newTodo));
}
//ADDING ALL THE todos TO THE DOM
function addAllTodos(arr) {
  $('.todoContainer').html('');
  _.each(getTodo(), function (el, idx) {
    el.idx = idx;
    addTodoToDom(el, templates.todo, $('.todoContainer'));
  })
}
//DELETING todo
function deleteTodo(idx) {
  toDo.splice(idx, 1);
}
//INDEX NUMBER CHANGE
function numberChange(array, $target){
var number= array.length;
$target.html(number)};




$(document).ready(function () {
  addAllTodos(toDo);


  $('.hello').on('click', function (event) {
    event.preventDefault();
    var newTodo = getTodoFromDom();
      addTodo(newTodo);
      addAllTodos(getTodo());
      $('input[name="todo"]').val('');
      numberChange(getTodo(), $('span'))
  });

  $('.todoContainer').on('click', '.delete', function (event) {
    var idx = $(this).closest('div').data('idx');
    deleteTodo(idx);
    addAllTodos(getTodo());
    numberChange(getTodo(), $('span'))
  });


});
