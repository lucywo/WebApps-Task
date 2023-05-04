const todoInput = document.getElementById('todo-input');
const addTodoBtn = document.getElementById('add-todo-btn');
const todoList = document.getElementById('todo-list');
const removeDoneTodosBtn = document.getElementById('remove-done-todos-btn');

let todos = [];

function addTodo() {
  const todoText = todoInput.value.trim();

  if (!todoText) {
    return;
  }

  if (todos.some((todo) => todo.description.toLowerCase() === todoText.toLowerCase())) {
    alert('Duplicate todo! Please enter a unique todo.');
    return;
  }

  const newTodo = {
    id: Date.now(),
    description: todoText,
    done: false,
  };

  todos.push(newTodo);
  renderTodos();
  todoInput.value = '';
}

function toggleTodoDone(event) {
  const todoId = parseInt(event.target.dataset.id);
  const todo = todos.find((todo) => todo.id === todoId);

  todo.done = !todo.done;
  renderTodos();
}

function removeDoneTodos() {
  todos = todos.filter((todo) => !todo.done);
  renderTodos();
}

function renderTodos() {
  todoList.innerHTML = '';

  todos.forEach((todo) => {
    const todoListItem = document.createElement('li');

    const todoCheckbox = document.createElement('input');
    todoCheckbox.type = 'checkbox';
    todoCheckbox.checked = todo.done;
    todoCheckbox.dataset.id = todo.id;
    todoCheckbox.addEventListener('change', toggleTodoDone);

    const todoLabel = document.createElement('label');
    todoLabel.innerText = todo.description;
    if (todo.done) {
      todoLabel.classList.add('completed');
    }

    todoListItem.appendChild(todoCheckbox);
    todoListItem.appendChild(todoLabel);
    todoList.appendChild(todoListItem);
  });

  if (todos.length === 0) {
    const noTodosListItem = document.createElement('li');
    noTodosListItem.innerText = 'No todos yet. Add one above!';
    todoList.appendChild(noTodosListItem);
  }
}

addTodoBtn.addEventListener('click', addTodo);
removeDoneTodosBtn.addEventListener('click', removeDoneTodos);

// Load saved todos from local storage
const savedTodos = JSON.parse(localStorage.getItem('todos'));
if (savedTodos) {
  todos = savedTodos;
  renderTodos();
}

// Save todos to local storage when the page is unloaded
window.addEventListener('unload', () => {
  localStorage.setItem('todos', JSON.stringify(todos));
});
