const taskInput = document.getElementById("task-input");
const taskList = document.getElementById("task-list");
const addTaskBtn = document.getElementById("add-task-btn");

const addTask = () => {
    const task = taskInput.value.trim();

    if (task) {

        const li = document.createElement("li");
        li.textContent = task;
        taskList.appendChild(li);

        li.addEventListener("click", () => {
            li.classList.toggle("done");
        });

        taskInput.value = "";

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "delete";
        deleteBtn.classList.add("delete-btn");

        deleteBtn.addEventListener("click", () => {
            li.remove();
        });

        li.appendChild(deleteBtn);

    } else {
        alert("Task cannot be empty");
    }
};

addTaskBtn.addEventListener("click", addTask);

taskInput.addEventListener("keypress", (event) => {
    if (event.key == "Enter") {
        addTask();
    }
});

