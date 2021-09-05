<script>
  let todos = [
    {
      id: 1,
      content: '첫 번째 할일',
      done: false
    },
    {
      id: 2,
      content: '두 번째 할일',
      done: false
    },
    {
      id: 3,
      content: '세 번째 할일',
      done: true
    },
    {
      id: 4,
      content: '네 번째 할일',
      done: false
    }
  ];
</script>

<main>
  <!-- 응용 -->
  <ul>
    {#each todos as {id, content, done} (id)}
      <div>
        <span><input type="checkbox" bind:checked={done} /></span>
        <span>{content}</span>
      </div>
    {/each}
  </ul>
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
