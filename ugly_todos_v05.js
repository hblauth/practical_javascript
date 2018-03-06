// Version 5
// 1. .displayTodos should show .todoText
// 2. .displayTodos should tell you if .todos is empty
// 3. .displayTodos should show .completed

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
};
