//selectors

const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");

//eventListeners
/*
It adds a click event listener to the todoButton element.
*/
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);

//functions

function addTodo(event) {
  //Prevent form from subwitting event.preventDefault();

  event.preventDefault();
  //     //Todo DIV

  /*
  1. Create a new div element.
  2. Add the class "todo" to the div element.
  3. Add the div element to the document body.
  */
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");

  //Create LI
  const newTodo = document.createElement("li");
  newTodo.innerText = todoInput.value;
  newTodo.classList.add("todo-item");
  /*
    It creates a new todo item and appends it to the todoDiv.
    */
  todoDiv.appendChild(newTodo);

  //complete button
  const completedButton = document.createElement("button");
  completedButton.innerHTML = "<i class='fas fa-check'></i>";
  completedButton.classList.add("complete-btn");
  todoDiv.appendChild(completedButton);
  //delet button
  const trashButton = document.createElement("button");
  trashButton.innerHTML = "<i class='fas fa-trash'></i>";
  trashButton.classList.add("delete-btn");
  todoDiv.appendChild(trashButton);
  //append to list
  todoList.appendChild(todoDiv);
  //clear input value
  todoInput.value = "";
}
function deleteCheck(e) {
  /*    check that all elements is in working or not
            console.log(e.target)*/
  const item = e.target;
  //delete
  if (item.classList[0] === "delete-btn") {
    const todo = item.parentElement;
    //animation
    todo.classList.add('fall');
    todo.addEventListener('transitionend', function (){
        todo.remove();
    } )
    
  }
if(item.classList[0]=== "complete-btn")
{
    const todo = item.parentElement;
    todo.classList.toggle("completed");

}


}
