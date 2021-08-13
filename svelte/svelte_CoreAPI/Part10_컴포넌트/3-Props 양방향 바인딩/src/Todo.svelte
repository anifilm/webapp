<script>
  export let todos;
  export let todo;
  export let index;

  function deleteTodo() {
    todos.splice(index, 1);
    todos = todos;
    console.log(todos);
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
