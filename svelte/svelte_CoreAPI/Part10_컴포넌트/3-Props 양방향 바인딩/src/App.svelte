<script>
  import Todo from "./Todo.svelte";

  let todos = [
    { id: 1, title: 'Breakfast', done: false },
    { id: 2, title: 'Lunch', done: false },
    { id: 3, title: 'Dinner', done: false }
  ];
</script>

<main>
  {#each todos as todo, index (todo.id)}
    <Todo bind:todos={todos} todo={todo} index={index} />
  {/each}
</main>

<style>
  main {
    /*text-align: center;*/
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
