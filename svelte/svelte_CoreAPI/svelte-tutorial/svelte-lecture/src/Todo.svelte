<script>
  import { createEventDispatcher } from 'svelte';

  export let todo;

  const dispatch = createEventDispatcher();

  function deleteTodo() {
    dispatch('deleteMe', todo);
  }
</script>

<div>
  <input type="checkbox" bind:checked={todo.done} />
  <p id="todo">{todo.title}</p>
  <button on:click={deleteTodo}>삭제</button>
</div>

<style>
  #todo {
    display: inline-block;
    width: 100px;
    margin-left: 10px;
  }
</style>
