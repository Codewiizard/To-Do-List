document.getElementById("taskInput").addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        addTask();
    }
});

function addTask() {
    let taskInput = document.getElementById("taskInput");
    let taskText = taskInput.value.trim();
    
    if (taskText === "") return; // Prevent empty tasks

    let taskList = document.getElementById("taskList");

    let li = document.createElement("li"); // Create a new list item
    li.innerHTML = `
        <span>${taskText}</span>
        <button onclick="removeTask(this)">X</button>
    `;

    taskList.appendChild(li); // Add the new task to the list
    taskInput.value = ""; // Clear input field
}

function removeTask(button) {
    button.parentElement.remove(); // Remove the clicked task
}
 