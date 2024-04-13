//create fixed variables
const toDoList = document.getElementById("todo-list");
const addButton = document.querySelector("#add-item");

let listNumber = 1; //numbering li items

function addItemToList() {
  //store text from the HTML text input field
  const textInput = document.getElementById("task-input");
  const taskText = textInput.value;
  
  //create new li with the text from input field
  const newTask = document.createElement("li");

  //add number to li
  newTask.innerHTML = `${listNumber}. ${taskText}`;
  
  //add new li element to a class
  newTask.classList.add("todo-list-item");
  
  //function that will add a button to each li item
  createCheckmarkButton(newTask);
  
  //add new li element as a child of the toDoList element
  toDoList.append(newTask);
  
  //increment the lisitNumber variable
  listNumber++;
  //clear text input field after saving li item in the todo list
  textInput.value = "";
}

//call addButton when clicked
addButton.addEventListener("click", function (event) {
  //cancel page reload
  event.preventDefault();
  //add item to li
  addItemToList();
});

//named function takes 1 parameter represennting a new li passed from the function addItemToList. Item is marked "completed" and deleted from the todo list
function createCheckmarkButton(listItem) {
  //create HTML button element that belongs to a class checkmark-button
  const checkButton = document.createElement("button");
  checkButton.classList.add("checkmark-button");

  //text to the button to indicate functionality
  checkButton.innerHTML = "X";

  //listen for hover; "x" changes to "delete". If hovered away, "delete" reverts to "x"
  checkButton.addEventListener("mouseover", function () {
    checkButton.innerHTML = "delete";
  });

  checkButton.addEventListener("mouseout", function () {
    checkButton.innerHTML = "x";
  });

  //listen for click event on the checkmark button & delete li items
  checkButton.addEventListener("click", function () {
    listItem.remove();
  });

  //add checkmark button to the li item
  listItem.append(checkButton);
}
