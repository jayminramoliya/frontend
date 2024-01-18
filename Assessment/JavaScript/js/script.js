function addTask() {
    const taskList = document.getElementById("taskList");
    const taskInput = document.getElementById("taskInput");
  if (taskInput.value.trim() !== "") {
    const newTask = document.createElement("li");
    newTask.textContent = taskInput.value;
    taskList.appendChild(newTask);
    taskInput.value = "";
  }
}