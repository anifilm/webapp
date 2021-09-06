<script>
  import { fade } from 'svelte/transition';
  import { flip } from 'svelte/animate';

  import TodoItem from './TodoItem.svelte';

  export let fetchTodos;
  export let handleCheckTodoProp;
  export let handleRemoveTodo;
  export let editMode;
  export let handleChangeEditMode;
  export let handleEditTodoItem;
</script>

<div class="main">
  <ul>
    {#each fetchTodos as todo (todo.id)}
      <li
        in:fade
        out:fade={{ duration: 100 }}
        animate:flip={{ duration: 1000 }}
      >
        <TodoItem
          {todo}
          {handleRemoveTodo}
          on:checkTodo
          {editMode}
          {handleChangeEditMode}
          {handleEditTodoItem}
          {handleCheckTodoProp}
        />
      </li>
    {/each}
  </ul>
</div>
