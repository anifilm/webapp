<script>
  export let handleTodoInputKeyup;
  export let todoValue;
</script>

<header>
  <div class="wrap">
    <h1>SVELTE TODO</h1>
    <input type="text" bind:value={todoValue} on:keyup={handleTodoInputKeyup} />
  </div>
</header>
