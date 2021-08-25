<script>
  import { storeTodos } from './store/index.js';
  import Todo from './components/Todo.svelte';

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

<div class="container">
  <div class="create-todo">
    <input
      type="text"
      class="form-control"
      bind:value={title}
      on:keydown={(e) => {
        e.key === 'Enter' && createTodo();
      }}
    />
    <button class="btn btn-primary" on:click={createTodo}>Create Todo</button>
  </div>
  <div class="todos">
    {#each $storeTodos as todo}
      <Todo todos={storeTodos} todo={todo} />
    {/each}
  </div>
</div>

<style lang="scss">
  @import "./scss/main.scss";
  .create-todo {
    margin-top: 50px;
    display: flex;
    .btn {
      width: 130px;
      height: 50px;
      flex-shrink: 0;
      font-weight: 700;
      margin-left: 10px;
    }
  }
  .todos {
    padding: 20px 0;
  }
</style>
