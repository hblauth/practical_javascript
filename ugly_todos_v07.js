// Version 07 - HTML and the DOM
// * There should be a ‘Display todos’ button and a ‘Toggle all’ button in the app
// * Clicking ‘Display todos’ should run todoList.displayTodos
// * Clicking ’Toggle all’ should run todoList.toggleAll


var todoList = {
  todos: [],
  displayTodos: function() {
    if (this.todos.length === 0){
      console.log('You have completed your todo list')
    } else {
      console.log('My todos:');
      for (var i=0; i < this.todos.length; i++) {
        if (this.todos[i].completed === true) {
          console.log(' [x] ', this.todos[i].todoText);
        } else {
        console.log(' [ ] ',this.todos[i].todoText);
        }
      }
    }
  },
  addTodo: function(todoText) {
    this.todos.push({
      todoText: todoText,
      completed: false,
    });
    this.displayTodos();
  },
  changeTodo: function(index, todoText) {
    this.todos[index].todoText = todoText;
    this.displayTodos();
  },
  deleteTodo: function(index) {
    this.todos.splice(index, 1);
    this.displayTodos();
  },
  toggleCompleted: function(index) {
    var todo = this.todos[index];
    todo.completed = !todo.completed;
    this.displayTodos();
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
    this.displayTodos();
  },
};

function init() {
  todoList.addTodo('insure a thing');
  todoList.addTodo('insure another thing');
  todoList.addTodo('insure a third thing');
};

var displayTodosButton = document.getElementById('displayTodosButton');

displayTodosButton.addEventListener('click', function() {
  todoList.displayTodos();
});

var toggleAllButton = document.getElementById('toggleAllButton');

toggleAllButton.addEventListener('click', function() {
  todoList.toggleAll();
});