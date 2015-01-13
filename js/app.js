//problem: user interaction doesn't provide desired results.
//solution: add interactivity so that the user can manage daily tasks.

var taskInput = document.getElementById("new-task"); //new-task
var addButton = document.getElementsByTagName("button")[0]; //First button
var incompleteTasksHolder = document.getElementById("incomplete-tasks"); //incomplete-tasks
var completedTasksHolder = document.getElementById("completed-task"); //completed-tasks

//Add a new task
var addTask = function() {
  //When the button is pressed
  //Create a new list item with the text from #new-task:
    //input(Checkbox)
    //label
    //input(text)
    //button.edit
    //button.delete
    //each elements, needs modified and appended
}


//Edit an existing task
var editTsk = function () {
  //When the Edit button is pressed
    //if the class of the parent is .editMode
      //switch from .editMode
      //label text become the input's value
    //else
      //switch to .editMode
      //input value becomes the label's text

    //toggle .editMode on the parent
}

//Delete an existing task
var deleteTask = function() {
  //When the delete button is pressed
    //remove the parent list item from the ul
}
//mark the task as complete
var taskCompleted = function () {
  //When the checkbox is checked
    //append the task list item to the #completed-tasks
}
//Mark a task as incomplete
var taskIncomplete = function () {
  //When the checkbox is unchecked
    //Append the task list item the the #incomplete-tasks
}
