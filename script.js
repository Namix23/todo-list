const toDoList = document.getElementById("todo-list");
const addBtn = document.querySelector("#add-item");

function addItemToList() {
  //store text from the HTML text input field
  const textInput = document.getElementById("task-input");
  const taskText = textInput.value;
  const newTask = document.createElement("li");
  newTask.innerHTML = taskText;
  //add new li element to a class
  newTask.classList.add("todo-list-item");
  // createCheckmarkButton(newTask);
  // add new li
  toDoList.append(newTask);
  textInput.value = "";
}

addBtn.addEventListener('click', function (e) {
  e.preventDefault();
  addItemToList();
});
