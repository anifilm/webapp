<script>
  import { v4 as uuid } from 'uuid';
  import Constant from './constant';

  import TodoHeader from './components/TodoHeader.svelte';
  import TodoInfos from './components/TodoInfos.svelte';
  import TodoList from './components/TodoList.svelte';

  import { setContext, getContext } from 'svelte';

  let todoValue = '';
  let editMode = '';
  let todos = [
    {
      id: uuid(),
      content: '첫 번째 할 일',
      done: false
    },
    {
      id: uuid(),
      content: '두 번째 할 일',
      done: false
    },
    {
      id: uuid(),
      content: '세 번째 할 일',
      done: true
    },
    {
      id: uuid(),
      content: '네 번째 할 일',
      done: false
    }
  ];

  $: fetchTodos = todos;
  $: todoCount = fetchTodos.length;

  let viewMode = Constant.ALL;

  $: if (viewMode === Constant.ALL) {
    fetchTodos = todos;
  }
  $: if (viewMode === Constant.ACTIVE) {
    fetchTodos = todos.filter((todo) => {
      return todo.done === false;
    });
  }
  $: if (viewMode === Constant.DONE) {
    fetchTodos = todos.filter((todo) => {
      return todo.done === true;
    });
  }

  function handleChangeViewMode(mode) {
    viewMode = mode;
  }
  function handleCheckTodo(event) {
    // dispatch를 이용할 때 예제
    let id = event.detail.id;
    console.log(id);
    todos = todos.map((todo) => {
      if (todo.id === id) {
        todo.done = !todo.done;
      }
      return todo;
    });
  }
  function handleCheckTodoProp(id) {
    todos = todos.map((todo) => {
      if (todo.id === id) {
        todo.done = !todo.done;
      }
      return todo;
    });
  }
  function handleChangeEditMode(id) {
    editMode = id;
  }
  function closeEditMode() {
    todoValue = '';
    editMode = '';
  }
  function handleRemoveTodo(id) {
    todos = todos.filter((todo) => {
      return todo.id !== id;
    });
  }
  function handleTodoInputKeyup(event) {
    if (event.code === 'Escape' || event.code === 'Esc') {
      closeEditMode();
    }
    if (event.code === 'Enter') {
      addTodoItem();
    }
  }
  function addTodoItem() {
    if (!todoValue.trim()) {
      closeEditMode();
      return;
    }
    const newTodo = {
      id: uuid(),
      content: todoValue.trim(),
      done: false
    };
    todos = [...todos, newTodo];
    closeEditMode();
  }
  function handleEditTodoItem(editTodo) {
    todos = todos.map((todo) => {
      if (todo.id === editTodo.id) {
        todo = editTodo;
      }
      return todo;
    });
    closeEditMode();
  }
</script>

<main>
  <div class="app">
    <TodoHeader
      bind:todoValue
      {handleTodoInputKeyup}
    />
    <TodoInfos
      {todoCount}
      {viewMode}
      {handleChangeViewMode}
    />
    <TodoList
      {fetchTodos}
      on:checkTodo={handleCheckTodo}
      {handleRemoveTodo}
      {editMode}
      {handleChangeEditMode}
      {handleEditTodoItem}
      {handleCheckTodoProp}
    />
  </div>
</main>
