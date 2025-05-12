
# 🧪 Build a Dynamic To-Do List with JavaScript – Full Tutorial for Beginners

## 📘 Objective
Create a dynamic to-do list that lets users:
- Add tasks
- Mark tasks as completed
- Remove tasks
- View a live task counter

## 🛠️ Technologies Used
- HTML5
- CSS3
- JavaScript (DOM manipulation)
- Git & GitHub (for version control and publishing)

## 🧱 Step 1: Setup Your Project Folder

```bash
mkdir dynamic-todo-list
cd dynamic-todo-list
git init
touch index.html styles.css app.js README.md
```

## 📄 Step 2: Create the HTML Structure (`index.html`)

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Dynamic To-Do List</title>
  <link rel="stylesheet" href="styles.css" />
</head>
<body>
  <h1>Team To-Do List</h1>
  <input type="text" id="taskInput" placeholder="Enter task description" />
  <button id="addTaskBtn">Add Task</button>
  <p>Total Tasks: <span id="taskCount">0</span></p>
  <ul id="taskList"></ul>
  <script src="app.js"></script>
</body>
</html>
```

## 🎨 Step 3: Add Styling (`styles.css`)

```css
body {
  font-family: Arial, sans-serif;
  padding: 20px;
}

input {
  padding: 8px;
  font-size: 16px;
  width: 250px;
}

button {
  padding: 8px 12px;
  font-size: 16px;
  border-radius: 5px;
  border: 2px solid black;
  cursor: pointer;
  background-color: #f0f0f0;
}

.remove-btn {
  padding: 8px 12px;
  font-size: 16px;
  border-radius: 5px;
  border: 2px solid blue;
  color: red;
  background: none;
  margin-left: 10px;
  cursor: pointer;
}

#taskList li {
  margin-bottom: 10px;
}
```

## 💻 Step 4: Add JavaScript Logic (`app.js`)

```javascript
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

  textSpan.addEventListener("click", () => {
    const completedText = document.createElement("span");
    completedText.textContent = "Completed!";
    taskItem.replaceChild(completedText, textSpan);
    taskItem.appendChild(removeBtn);
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
    e.stopPropagation();
    taskItem.remove();
    updateTaskCount(-1);
  };
  return removeBtn;
}

function updateTaskCount(change) {
  count += change;
  taskCount.textContent = count;
}
```

## 📌 Step 5: Test in Browser

Open `index.html` in your browser or use VS Code Live Server.

## 🗃️ Step 6: Add to Git

```bash
git add .
git commit -m "feat: Build dynamic to-do list with complete/remove functionality and live counter"
```

## 🚀 Step 7: Push to GitHub

1. Create a repo on GitHub (without README)
2. Connect it:

```bash
git remote add origin https://github.com/YOUR_USERNAME/dynamic-todo-list.git
git branch -M main
git push -u origin main
```

## 🌐 Step 8: (Optional) Deploy with GitHub Pages

In your repo: Settings → Pages → Source: `main` branch → Save

```text
https://YOUR_USERNAME.github.io/dynamic-todo-list/
```
