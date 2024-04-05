//
const toDoList = document.getElementById("todo-list");
const addButton = document.querySelector("#add-item");

function addItemToList() {
  //store text from the HTML text input field
  const textInput = document.getElementById("task-input");
  const taskText = textInput.value;
  const newTask = document.createElement("li");
  newTask.innerHTML = taskText;
  //add new li element to a class
  newTask.classList.add("todo-list-item");

  // createCheckmarkButton(newTask);

  //add new li element as a child of the toDoList element
  toDoList.append(newTask);
  textInput.value = "";
}
// call when addButton is clicked
addButton.addEventListener("click", function (event) {
  event.preventDefault();
  addItemToList();
});
