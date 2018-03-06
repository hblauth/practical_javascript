//Version 2 requirements:
//01 It should: have a function to display todos
//02 It should: have a function to add todos
//03 It should: have a function to change todos
//04 It should: have a function to delete todos

todos = ['item 1', 'item 2', 'item 3']

// 01. Function to display todos

function displayTodos() {
    console.log('My Todos:', todos);
}


// 02. Function to add todos

function addTodos(newTodo) {
    todos.push(newTodo);
    displayTodos();
}

// 03. Function for changing todos
function changeTodo(index, newTodo) {
    todos[index] = newTodo;
    displayTodos();
}

// 04. Function to delete todos
function deleteTodo(index) {
    todos.splice(index, 1);
    displayTodos();
}
