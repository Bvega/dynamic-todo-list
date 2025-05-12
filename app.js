// Get references to DOM elements
const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");
const taskCount = document.getElementById("taskCount");

let count = 0; // Track number of tasks

addTaskBtn.addEventListener("click", () => {
  const taskText = taskInput.value.trim();

  // Ignore empty inputs
  if (taskText === "") return;

  // Create a new <li> element
  const li = document.createElement("li");
  li.textContent = taskText;

  // Add click-to-complete functionality
  li.addEventListener("click", () => {
    li.textContent = "Completed!";
    li.appendChild(createRemoveButton(li)); // re-append remove button
  });

  // Add remove button
  li.appendChild(createRemoveButton(li));

  // Add the new task to the list
  taskList.appendChild(li);

  // Clear the input field
  taskInput.value = "";

  // Update the task counter
  updateTaskCount(1);
});

// Function to create the "Remove" button
function createRemoveButton(taskItem) {
  const removeBtn = document.createElement("span");
  removeBtn.textContent = "[Remove]";
  removeBtn.className = "remove-btn";
  removeBtn.onclick = (e) => {
    e.stopPropagation(); // Prevent "Completed!" if clicked
    taskItem.remove();
    updateTaskCount(-1);
  };
  return removeBtn;
}

// Function to update the task counter
function updateTaskCount(change) {
  count += change;
  taskCount.textContent = count;
}
