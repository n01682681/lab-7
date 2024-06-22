const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');
const tasks = [];

document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();
    const task = taskInput.value.trim();
    if (task) {
        addTask(task);
        taskInput.value = '';
    }
});

function addTask(task) {
    const taskElement = document.createElement('li');
    taskElement.innerHTML = `
        <input type="checkbox" class="task-checkbox">
        <span>${task}</span>
        <button class="task-delete">Delete</button>
    `;
    taskList.appendChild(taskElement);
    tasks.push(task);

    const checkbox = taskElement.querySelector('.task-checkbox');
    checkbox.addEventListener('change', () => {
        if (checkbox.checked) {
            taskElement.style.textDecoration = 'line-through';
        } else {
            taskElement.style.textDecoration = 'none';
        }
    });

    const deleteButton = taskElement.querySelector('.task-delete');
    deleteButton.addEventListener('click', () => {
        taskList.removeChild(taskElement);
        const index = tasks.indexOf(task);
        tasks.splice(index, 1);
    });
}