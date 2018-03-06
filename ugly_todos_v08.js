//Version 08: Add buttons for more methods
//* Requirements
//    * It should: Have working controls for .addTodo
//    * It should: Have working controls for .changeTodo
//    * It should: Have working controls for .deleteTodo
//    * It should: Have working controls for .toggleCompleted


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
  }
};

function init() {
  todoList.addTodo('insure a thing');
  todoList.addTodo('insure another thing');
  todoList.addTodo('insure a third thing');
};

var handlers = {
  displayTodos: function() {
    todoList.displayTodos();
  },
  addTodo: function() {
    var addTodoTextInput = document.getElementById('addTodoTextInput');
    todoList.addTodo(addTodoTextInput.value);
    addTodoTextInput.value = '';
  },
  changeTodo: function() {
    var changeTodoIndexInput = document.getElementById('changeTodoIndexInput');
    var changeTodoTextInput = document.getElementById('changeTodoTextInput');
    todoList.changeTodo(changeTodoIndexInput.valueAsNumber, changeTodoTextInput.value);
    changeTodoIndexInput.value = '';
    changeTodoTextInput.value = '';
  },
  deleteTodo: function() {
    var deleteTodoIndexInput = document.getElementById('deleteTodoIndexInput');
    todoList.deleteTodo(deleteTodoIndexInput.valueAsNumber);
    deleteTodoIndexInput.value = '';
  },
  toggleCompleted: function() {
    var toggleCompletedIndexInput = document.getElementById('toggleCompletedIndexInput');
    todoList.toggleCompleted(toggleCompletedIndexInput.valueAsNumber);
    toggleCompletedIndexInput.value = '';
  },
  toggleAll: function() {
    todoList.toggleAll();
  }
};
