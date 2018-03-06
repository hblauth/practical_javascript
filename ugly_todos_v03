// Version 3 - Add all requirements to a single todo object

var todoList = {
  todos: [],
  displayTodos: function() {
    console.log('My todos:', this.todos);
  },
  addTodo: function(newTodo) {
    this.todos.push(newTodo);
    this.displayTodos();
  },
  changeTodo: function(index, update) {
    this.todos[index] = update;
    this.displayTodos();
  },
  deleteTodo: function (index) {
    this.todos.splice(index, 1);
    this.displayTodos();
  }
};
