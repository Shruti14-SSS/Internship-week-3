document.addEventListener('DOMContentLoaded', () => {
    loadTasks();
});

function loadTasks() {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = '';

    // Retrieve tasks from local storage
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    tasks.forEach(task => {
        createTaskElement(task);
    });
}

function createTaskElement(task) {
    const taskList = document.getElementById('taskList');
    const li = document.createElement('li');

    li.innerHTML = `
        <span class="${task.completed ? 'completed' : ''}">${task.text}</span>
    `;

    taskList.appendChild(li);
}
