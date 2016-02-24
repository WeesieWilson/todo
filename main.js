

//EMPTY todo ARRAY
var toDo = []

//GRABBING THE todo IN THE INPUT ON THE DOM
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

//LINE THROUGH COMPLETED ITEM
// function lineThrough($target){
//   $target.siblings("p").css("text-decoration", "none");
// };

function cssStyle($target, attr, property){
  $target.css(attr, property)};




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

  $('body').on('click', '.complete', function (event) {
    cssStyle($(this),'background', 'url(checked-mark.png) no-repeat');
    cssStyle($(this),'background-size', '100%');
    cssStyle($(this),'border', 'none');
    // $(this).css("background", "url(checked-mark.png) no-repeat");
    // $(this).css("background-size", "100%");
    // $(this).css("border", "none");

    var line = $(this).siblings("p");
    line.css("text-decoration", "line-through");
  });

  $('.todoContainer').on('click', '.delete', function (event) {
    var idx = $(this).closest('div').data('idx');
    deleteTodo(idx);
    addAllTodos(getTodo());
    numberChange(getTodo(), $('span'))
  });

});
