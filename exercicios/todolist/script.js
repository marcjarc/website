function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");

    var task = taskInput.value;
    if (task === '') {
        alert("Please enter a task!");
        return;
    }

    var taskItem = document.createElement("div");
    taskItem.classList.add("task-item");

    var listItem = document.createElement("li");
    listItem.textContent = task;

    var removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.className = "remove-btn";
    removeButton.onclick = function () {
        taskItem.remove(); // Remove the entire task item when the remove button is clicked
    };

    taskItem.appendChild(listItem);
    taskItem.appendChild(removeButton);

    taskList.appendChild(taskItem);

    taskInput.value = '';
}
