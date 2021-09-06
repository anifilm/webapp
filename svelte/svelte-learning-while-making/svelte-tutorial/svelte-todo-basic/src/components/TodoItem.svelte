<script>
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();

  export let todo;
  export let handleRemoveTodo;
  export let editMode;
  export let handleChangeEditMode;
  export let handleEditTodoItem;
  export let handleCheckTodoProp;

  function handleCheck(id) {
    dispatch('checkTodo', {
      id: id
    });
  }
</script>

<!-- <input
  type="checkbox"
  bind:checked={todo.done}
  on:click={() => {
    handleCheck(todo.id)
  }}
> -->
<input
  type="checkbox"
  bind:checked={todo.done}
  on:click={() => {
    handleCheckTodoProp(todo.id)
  }}
/>
{#if editMode === todo.id}
  <input
    type="text"
    bind:value={todo.content}
    on:focusout={() => {
      handleEditTodoItem(todo)
    }}
  />
{:else}
  <span
    on:dblclick={() => {
      handleChangeEditMode(todo.id)
    }}
  >
    {todo.content}
  </span>
{/if}
<a href="#null" on:click={() => handleRemoveTodo(todo.id)}>X</a>
