<script>
  let todos = [
    { done: false, text: 'Svelte 공부하기' },
    { done: false, text: '어플리케이션 제작하기' },
    { done: true, text: '운동하기' }
  ];

  $: remaining = todos.filter(x => !x.done).length;

  function add() {
    todos = todos.concat({ done: false, text: '' });
  }
  function clear() {
    todos = todos.filter(x => !x.done);
  }
</script>

<main>
  {#each todos as todo, index (index)}
    <div class:done={todo.done}>
      <input type="checkbox" bind:checked={todo.done} />
      <input type="text" bind:value={todo.text} autofocus />
    </div>
  {/each}

  <p>{remaining}개의 할 일이 있습니다.</p>

  <button on:click={add}>추가</button>
  <button on:click={clear}>완료된 항목 삭제</button>
</main>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }
  .done {
    opacity: 0.4;
  }
  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
