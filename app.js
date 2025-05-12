// DOM elements
const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");
const taskCount = document.getElementById("taskCount");

let count = 0;

addTaskBtn.addEventListener("click", () => {
  const taskText = taskInput.value.trim();
  if (taskText === "") return;

  const taskItem = document.createElement("li");

  const textSpan = document.createElement("span");
  textSpan.textContent = taskText;

  // Click to mark as completed (using replaceWith)
  textSpan.addEventListener("click", () => {
    const completedText = document.createElement("span");
    completedText.textContent = "Completed!";
    taskItem.replaceChild(completedText, textSpan);
    taskItem.appendChild(removeBtn); // re-append remove button
  });

  const removeBtn = createRemoveButton(taskItem);

  taskItem.appendChild(textSpan);
  taskItem.appendChild(removeBtn);
  taskList.appendChild(taskItem);

  taskInput.value = "";
  updateTaskCount(1);
});

function createRemoveButton(taskItem) {
  const removeBtn = document.createElement("button");
  removeBtn.textContent = "Remove";
  removeBtn.className = "remove-btn";
  removeBtn.onclick = (e) => {
    e.stopPropagation(); // Prevent "Completed!" on click
    taskItem.remove();
    updateTaskCount(-1);
  };
  return removeBtn;
}

function updateTaskCount(change) {
  count += change;
  taskCount.textContent = count;
}
