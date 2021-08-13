<script>
  import Todo from "./Todo.svelte";

  let todos = [
    { id: 1, title: 'Breakfast', done: false },
    { id: 2, title: 'Lunch', done: false },
    { id: 3, title: 'Dinner', done: false }
  ];

  function deleteTodo(event) {
    // event.detail => `new CustomEvent()`를 통해 이벤트를 초기화 할 때 전달 된 모든 데이터를 반환
    const todo = event.detail.todo;
    const index = todos.findIndex(t => t.id === todo.id);
    //console.log(todo);
    todos.splice(index, 1);
    todos = todos;
  }
</script>

<main>
  {#each todos as todo (todo.id)}
    <Todo todo={todo} on:deleteMe={deleteTodo} />
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
