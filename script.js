//create fixed variables
const toDoList = document.getElementById("todo-list");
const addButton = document.querySelector("#add-item");


function addItemToList() {
  //store text from the HTML text input field
  const textInput = document.getElementById("task-input");
  const taskText = textInput.value;

  //create new li with the text from input field
  const newTask = document.createElement("li");
  newTask.innerHTML = taskText;

  //add new li element to a class
  newTask.classList.add("todo-list-item");
  
  createCheckmarkButton();
  addButton.addEventListener("click", function (event) {
  });
  const markButton = document.createElement("button");
  markButton.innerHTML = taskText;
  markButton.classList.add("✓");
  
  event.preventDefault();
  addItemToList();
  markButton.addEventListener('click',function(event){
    markButton.classList.remove("✓");
    createCheckmarkButton();
  })
}

//add new li element as a child of the toDoList element
toDoList.append(newTask);
textInput.value = "";