<script>
  import { storeTodos } from './store.js';
  import Todo from './Todo.svelte';

  let title = '';
  let id = 0;

  function createTodo() {
    if (!title.trim()) {
      title = '';
			return;
 	  }
    $storeTodos.push({
      id,
      title
    });
    $storeTodos = $storeTodos;
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
  {#each $storeTodos as todo}
    <Todo todos={storeTodos} todo={todo} />
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
