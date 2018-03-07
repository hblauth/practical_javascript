// Version 09 - Escape from the console
//* Requirements
//    1. There should be a li element for every todo
//    2. Each li element should contain .todoText
//    3. Each li element should show .completed


var todoList = {
  todos: [],
  addTodo: function(todoText) {
    this.todos.push({
      todoText: todoText,
      completed: false,
    });
  },
  changeTodo: function(index, todoText) {
    this.todos[index].todoText = todoText;
  },
  deleteTodo: function(index) {
    this.todos.splice(index, 1);
  },
  toggleCompleted: function(index) {
    var todo = this.todos[index];
    todo.completed = !todo.completed;
  },
  toggleAll: function() {
    var totalTodos = this.todos.length;
    var completedTodos = 0;

    for (var i=0; i < totalTodos; i++){
      if (this.todos[i].completed === true){
        completedTodos++;
      }
    }
    if (completedTodos === totalTodos) {
      for (var i=0; i < totalTodos; i++){
        this.todos[i].completed = false;
      }
    } else {
        for (var i=0; i < totalTodos; i++){
          this.todos[i].completed = true;
        }
      }
  }
};

function init() {
  todoList.addTodo('insure a thing');
  todoList.addTodo('insure another thing');
  todoList.addTodo('insure a third thing');
  view.displayTodos();
};

var handlers = {
  addTodo: function() {
    var addTodoTextInput = document.getElementById('addTodoTextInput');
    todoList.addTodo(addTodoTextInput.value);
    addTodoTextInput.value = '';
    view.displayTodos();
  },
  changeTodo: function() {
    var changeTodoIndexInput = document.getElementById('changeTodoIndexInput');
    var changeTodoTextInput = document.getElementById('changeTodoTextInput');
    todoList.changeTodo(changeTodoIndexInput.valueAsNumber, changeTodoTextInput.value);
    changeTodoIndexInput.value = '';
    changeTodoTextInput.value = '';
    view.displayTodos();
  },
  deleteTodo: function() {
    var deleteTodoIndexInput = document.getElementById('deleteTodoIndexInput');
    todoList.deleteTodo(deleteTodoIndexInput.valueAsNumber);
    deleteTodoIndexInput.value = '';
    view.displayTodos();
  },
  toggleCompleted: function() {
    var toggleCompletedIndexInput = document.getElementById('toggleCompletedIndexInput');
    todoList.toggleCompleted(toggleCompletedIndexInput.valueAsNumber);
    toggleCompletedIndexInput.value = '';
    view.displayTodos();
  },
  toggleAll: function() {
    todoList.toggleAll();
    view.displayTodos();
  }
};

var view = {
  displayTodos: function() {
    var todosUl = document.querySelector('ul');
    todosUl.innerHTML = '';
    for (var i=0; i < todoList.todos.length; i++) {
      var todoLi = document.createElement('li');
      var todoTextWithCompletion = '';
      var todo = todoList.todos[i];

      if (todo.completed === true) {
        todoTextWithCompletion = '[x] ' + todo.todoText;
      } else {
        todoTextWithCompletion = '[ ] ' + todo.todoText;
      }

      todoLi.textContent = todoTextWithCompletion;
      todosUl.appendChild(todoLi);
    }
  }
};
