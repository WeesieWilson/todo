

//EMPTY todo ARRAY
var toDo = [
]

//GRABBING THE todo IN THE INPUT ON THE DOM
//THIS IS AN OBJECT
function getTodoFromDom() {
  var post = $('input[name="todo"]').val();
  return {
    post: post,
    complete: false,
  }
}

//ADDING THE NEW todo TO THE EMPTY ARRAY
function addTodo(newTodo) {
  toDo.push(newTodo);
}

//GRABBING THE NEW ARRAY WITH NEW todo IN IT
//THIS IS AN ARRAY
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


//STYLING IN JAVASCIRPT
function cssStyle($target, attr, property){
  $target.css(attr, property)};

//FINISH PRODUCT
function finishProduct(){
  addAllTodos(getTodo());
  numberChange(getTodo(), $('span'));
}




$(document).ready(function () {
  addAllTodos(toDo);


//CLICKING SUBMIT AND MAKING todo APPEND TO PAGE
  $('.submit').on('click', function (event) {
    event.preventDefault();
    var newTodo = getTodoFromDom();
      addTodo(newTodo);
      $('input[name="todo"]').val('');
      finishProduct();
  });

//CLICKING THE COMPLETE BUTTON CHANGING FALSE TO TRUE
    $('body').on('click', '.complete', function (event) {
      var indexOfOurTodo = $(this).parent().data('idx');
      if(!toDo[indexOfOurTodo].complete) {
        $(this).addClass('line');
        $(this).siblings('p').css('text-decoration', 'line-through');
        toDo[indexOfOurTodo].complete = !toDo[indexOfOurTodo].complete;
      } else {
        $(this).removeClass('line');
        $(this).siblings('p').css('text-decoration', 'none');

      }
      var completed = _.where(toDo,{complete: false});
      numberChange(completed, $('span'));
    });

//CLICK DELETE AND DELETE todo AND CHANGE NUMBER
  $('.todoContainer').on('click', '.delete', function (event) {
    var idx = $(this).closest('div').data('idx');
    deleteTodo(idx);
    finishProduct();
  });

//CLICK CLEAR ALL AND CLEARS COMPLETED
  $('footer').on('click', '.clear', function (event) {
    var completed = _.where(toDo,{complete: true});
    completed.forEach(function(el) {
      deleteTodo(toDo.indexOf(el));
    });
    finishProduct();
  });

$('footer').on('click', '.active', function (event) {
event.preventDefault();
  var completed = _.where(toDo,{complete: false});
  function addAllTodos(arr) {
    $('.todoContainer').html('');
    _.each(completed, function (el, idx) {
      el.idx = idx;
      addTodoToDom(el, templates.todo, $('.todoContainer'));
    })
  }
  addAllTodos(completed);



});
$('footer').on('click', '.all', function (event) {

  event.preventDefault();

    finishProduct();



});
$('footer').on('click', '.completed', function (event) {
event.preventDefault();
  var completed = _.where(toDo,{complete: true});
  function addAllTodos(arr) {
    $('.todoContainer').html('');
    _.each(completed, function (el, idx) {
      el.idx = idx;
      addTodoToDom(el, templates.todo, $('.todoContainer'));
    })
  }

  addAllTodos(completed);



});


});
