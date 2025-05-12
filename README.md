# 📝 Dynamic To-Do List

A dynamic, interactive to-do list web app built with HTML, CSS, and vanilla JavaScript. Designed for productivity teams to manage tasks efficiently with live DOM updates.

## 🚀 Features

- Add tasks with a unique description
- Mark tasks as **completed** with a click
- Remove tasks individually
- Live task counter updates as tasks are added/removed
- Clean, responsive design

## 📂 Project Structure

dynamic-todo-list/
├── index.html # Main HTML file
├── styles.css # CSS for layout and styles
├── app.js # JavaScript with all functionality
└── README.md # Project documentation


## 📦 How to Use

1. Clone the repo:

   ```bash
   git clone https://github.com/Bvega/dynamic-todo-list.git
   cd dynamic-todo-list
2.Open index.html in your browser.

No build tools or dependencies required — pure HTML/CSS/JS

✅ Live Demo
If deployed, link it here:

Live Version

🧠 Reflection Questions
What DOM methods did you use? createElement, appendChild, replaceChild, remove, textContent

How did you keep the counter accurate? By incrementing/decrementing a count variable and updating the DOM.

What challenges did you face? Handling text replacement while preserving the remove button was tricky — solved by re-attaching the button dynamically.

🛠️ Future Improvements
Prevent duplicate tasks

Add localStorage for task persistence

Improve accessibility (e.g., keyboard navigation)

🧑‍💻 Author
Bolivar Vega