<script>
  export let todos;
  export let todo;

  let isEdit = false;
  let title = '';

  function onEdit() {
    isEdit = true;
    title = todo.title;
  }
  function offEdit() {
    isEdit = false;
  }
  function updateTodo() {
    if (!title.trim()) {
		  offEdit();
      return;
 	  }
    todo.title = title;
    offEdit();
  }
  function deleteTodo() {
    todos = todos.filter((t) => t.id !== todo.id);
    //console.log(todos);
  }
</script>

{#if isEdit}
  <div>
    <input
      type="text"
      bind:value={title}
      on:keydown={(e) => {
        e.key === 'Enter' && updateTodo();
      }}
    />
    <button on:click={updateTodo}>OK</button>
    <button on:click={offEdit}>Cancel</button>
  </div>
{:else}
  <div>
    <span class="todo">{todo.title}</span>
    <button on:click={onEdit}>Edit</button>
    <button on:click={deleteTodo}>Delete</button>
  </div>
{/if}

<style>
  .todo {
    display: inline-block;
    width: 190px;
  }
</style>
