//it should have a place to store todos
//it should have a way to display todos on console for now
//it should have a way to add new todos
//it should have a way to change todos
//it should have a way to delete todos

//store todos
var todos = [];

//display todos
function displayTodos (){
  console.log('My todos:', todos)
}

//add todos
function addTodos (todo){
  todos.push(todo);
}

//change todo
function editTodo(index, newTodo){
  todos[index] = todos[newTodo];
}

//delete todo
function deleteTodo (index){
  todos.splice(index, 1);
}
