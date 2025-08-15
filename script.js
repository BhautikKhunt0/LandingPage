document.addEventListener('DOMContentLoaded', () => {
    const todoInput = document.getElementById('todo-input');
    const addButton = document.getElementById('add-button');
    const todoList = document.getElementById('todo-list');

    addButton.addEventListener('click', addTodo);
    todoInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addTodo();
        }
    });

    function addTodo() {
        const todoText = todoInput.value.trim();
        if (todoText === '') {
            return;
        }

        const li = document.createElement('li');
        const span = document.createElement('span');
        span.textContent = todoText;
        li.appendChild(span);

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('delete-button');
        deleteButton.addEventListener('click', () => {
            todoList.removeChild(li);
        });

        li.addEventListener('click', () => {
            li.classList.toggle('completed');
        });

        li.appendChild(deleteButton);
        todoList.appendChild(li);
        todoInput.value = '';
    }
});
