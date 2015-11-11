var taskInput = document.getElementById('addnew').getElementsByTagName('input')[0];
var addButton = document.getElementById('addnew').getElementsByTagName('button')[0];
var incompleteTasksHolder = document.getElementById('todo');
var completedTasksHolder = document.getElementById('finished');

var createNewTaskElement = function(taskString){
	var field = document.createElement("div");
	var label = document.createElement("label");
	var checkBox = document.createElement("input"); 
	var span = document.createElement("span");
	var text = document.createElement("span");
	var editInput = document.createElement("input");
	var editButton = document.createElement("button");
	var deleteButton = document.createElement("button");

	checkBox.type = "checkbox";
	editInput.type = "text";

	field.className = "field";
	text.className = "text";

	editButton.innerText = "Edit";
	editButton.className = "edit";
	deleteButton.innerText = "Delete";
	deleteButton.className = "delete";

	text.innerText = taskString;

	label.appendChild(checkBox);
	label.appendChild(span);

	field.appendChild(label);
	field.appendChild(text);
	field.appendChild(editInput);
	field.appendChild(editButton);
	field.appendChild(deleteButton);

	return field;
}

var addTask = function() {
  var field = createNewTaskElement(taskInput.value);
  
  incompleteTasksHolder.appendChild(field);
  bindTaskEvents(field,taskCompleted);
  taskInput.value = "";
}

var editTask = function() {
  console.log("Edit task...");

  
  var field = this.parentNode;
  var editInput = field.querySelector("input[type=text]");
  var text = field.querySelector(".text");
  var containsClass = field.classList.contains("editmode");
  
  
  if(containsClass){
    text.innerText = editInput.value;
  }else{
    editInput.value = text.innerText;
  }
  
  field.classList.toggle("editmode");
}

var deleteTask = function() {
  console.log("Delete task...");
  var field = this.parentNode;
  var todo = field.parentNode;
  todo.removeChild(field);
}

var taskCompleted = function() {
  console.log("Task complete...");
  var field = this.parentNode.parentNode;
  console.log(field);
  completedTasksHolder.appendChild(field);
  bindTaskEvents(listItem,taskIncomplete);
}

//Mark a task as incomplete
var taskIncomplete = function() {
  console.log("Task incomplete...");
  var listItem = this.parentNode;
  incompleteTasksHolder.appendChild(listItem);
  bindTaskEvents(listItem,taskCompleted);
}




var bindTaskEvents = function(field, checkBoxEventHandler){

	var checkBox = field.querySelector("input[type=checkbox]");
	var editButton = field.querySelector("button.edit");
	var deleteButton = field.querySelector("button.delete");


	editButton.onclick = editTask;
	deleteButton.onclick = deleteTask;
	checkBox.onchange = checkBoxEventHandler;
}


addButton.onclick = addTask;
















/*
//Problem: User interaction doesn't provide desired results.
//Solution: Add interactivty so the user can manage daily tasks.

var taskInput = document.getElementById("new-task"); //new-task
var addButton = document.getElementsByTagName("button")[0]; //first button
var incompleteTasksHolder = document.getElementById("incomplete-tasks"); //incomplete-tasks
var completedTasksHolder= document.getElementById("completed-tasks"); //completed-tasks

var createNewTaskElement = function(taskString){
  var listItem = document.createElement("li");
  var checkBox = document.createElement("input"); 
  var label = document.createElement("label");
  var editInput = document.createElement("input");
  var editButton = document.createElement("button");
  var deleteButton = document.createElement("button");
  
  checkBox.type = "checkbox";
  editInput.type = "text";
  
  editButton.innerText = "Edit";
  editButton.className = "edit";
  deleteButton.innerText = "Delete";
  deleteButton.className = "delete";
  
  label.innerText = taskString;
  
  listItem.appendChild(checkBox);
  listItem.appendChild(label);
  listItem.appendChild(editInput);
  listItem.appendChild(editButton);
  listItem.appendChild(deleteButton);
  
  return listItem;
}


var addTask = function() {
  console.log("Add task...");
  var listItem = createNewTaskElement(taskInput.value);
  
  incompleteTasksHolder.appendChild(listItem);
  bindTaskEvents(listItem,taskCompleted);
  
  taskInput.value = "";
}

//Edit an existing task
var editTask = function() {
  console.log("Edit task...");
  
  var listItem = this.parentNode;
  var editInput = listItem.querySelector("input[type=text]");
  var label = listItem.querySelector("label");
  var containsClass = listItem.classList.contains("editMode");
  
  
  if(containsClass){
    label.innerText = editInput.value;
  }else{
    editInput.value = label.innerText;
  }
  
  listItem.classList.toggle("editMode");
}

//Delete an existing task
var deleteTask = function() {
  console.log("Delete task...");
  var listItem = this.parentNode;
  var ul = listItem.parentNode;
  
  ul.removeChild(listItem);
}

//Mark a task as complete
var taskCompleted = function() {
  console.log("Task complete...");
  var listItem = this.parentNode;
  completedTasksHolder.appendChild(listItem);
  bindTaskEvents(listItem,taskIncomplete);
}

//Mark a task as incomplete
var taskIncomplete = function() {
  console.log("Task incomplete...");
  var listItem = this.parentNode;
  incompleteTasksHolder.appendChild(listItem);
  bindTaskEvents(listItem,taskCompleted);
}

var bindTaskEvents = function(taskListItem, checkBoxEventHandler){
  console.log("Bind list item events");
  var checkBox = taskListItem.querySelector("input[type=checkbox]");
  var editButton = taskListItem.querySelector("button.edit");
  var deleteButton = taskListItem.querySelector("button.delete");
  
  editButton.onclick = editTask;
  deleteButton.onclick = deleteTask;
  checkBox.onchange = checkBoxEventHandler;
}

var ajaxRequest = function(){
  console.log("AJAX request");
}
addButton.addEventListener("click",addTask);
addButton.addEventListener("click",ajaxRequest);



for (var i=0; i<incompleteTasksHolder.children.length; i++){
  bindTaskEvents(incompleteTasksHolder.children[i],taskCompleted);
}

for (var i=0; i<completedTasksHolder.children.length; i++){
  bindTaskEvents(completedTasksHolder.children[i],taskIncomplete);
}
*/