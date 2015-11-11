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
  completedTasksHolder.appendChild(field);
  bindTaskEvents(field,taskIncomplete);
}

//Mark a task as incomplete
var taskIncomplete = function() {
  console.log("Task incomplete...");
  var field = this.parentNode.parentNode;
  incompleteTasksHolder.appendChild(field);
  bindTaskEvents(field,taskCompleted);
}




var bindTaskEvents = function(field, checkBoxEventHandler){

	var checkBox = field.querySelector("input[type=checkbox]");
	var editButton = field.querySelector("button.edit");
	var deleteButton = field.querySelector("button.delete");


	editButton.onclick = editTask;
	deleteButton.onclick = deleteTask;
	checkBox.onchange = checkBoxEventHandler;
}

addButton.addEventListener("click",addTask);


for(var i=0; i<incompleteTasksHolder.children.length; i++){
	bindTaskEvents(incompleteTasksHolder.children[i],taskCompleted)
}

for(var i=0; i<completedTasksHolder.children.length; i++){
	bindTaskEvents(completedTasksHolder.children[i],taskIncomplete)
}