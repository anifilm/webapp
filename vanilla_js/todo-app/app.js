// Selectors
document.querySelector('form').addEventListener('submit', handleSubmitForm);
document.querySelector('ul').addEventListener('click', handleClickDeleteOrCheck);
document.getElementById('clearAll').addEventListener('click', handleClearAll);

// Event Handlers
function handleSubmitForm(e) {
  e.preventDefault();
  let input = document.querySelector('input');
  if (input.value != '')
    addTodo(input.value);
  input.value = '';
}

function handleClickDeleteOrCheck(e) {
  let targetName = e.target.parentNode.name;

  if (targetName == 'checkButton') {
    // console.log('checkClicked!');
    checkTodo(e);
  }
  if (targetName == 'deleteButton') {
    // console.log('deleteClicked!');
    deleteTodo(e);
  }
}

function handleClearAll() {
  document.querySelector('ul').innerHTML = '';
}

// Helpers
function addTodo(todo) {
  let ul = document.querySelector('ul');
  let li = document.createElement('li');
  li.innerHTML = `
    <span class="todo-item">${todo}</span>
    <button name="checkButton"><i class="fas fa-check-square"></i></button>
    <button name="deleteButton"><i class="fas fa-trash"></i></button>
  `;

  li.classList.add('todo-list-item');
  ul.appendChild(li);
}

function checkTodo(e) {
  let item = e.target.parentNode.parentNode;
  if (item.style.textDecoration == 'line-through') {
    item.style.textDecoration = 'none';
  } else {
    item.style.textDecoration = 'line-through';
  }
}

function deleteTodo(e) {
  let item = e.target.parentNode.parentNode;

  item.addEventListener('transitionend', function () {
    item.remove();
  });

  item.classList.add('todo-list-item-fall');
}
