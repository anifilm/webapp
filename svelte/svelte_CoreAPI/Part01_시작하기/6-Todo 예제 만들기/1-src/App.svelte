<script>
  import Todo from './Todo.svelte';

  let title = '';
  let id = 0;
  let todos = [];

  function createTodo() {
    if (!title.trim()) {
			return;
 	  }
    todos.push({
      id,
      title
    });
    todos = todos;
    title = '';
    id += 1;
  }
</script>

<main>
  <input
    type="text"
    bind:value={title}
    on:keydown={(e) => {
      e.key === 'Enter' && createTodo();
    }}
  />
  <button on:click={createTodo}>Create Todo</button>
  {#each todos as todo}
    <Todo bind:todos={todos} todo={todo} />
  {/each}
</main>

<style>
  main {
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }
  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
