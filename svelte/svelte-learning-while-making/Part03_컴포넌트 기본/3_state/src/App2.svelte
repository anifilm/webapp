<script>
  let list = [
    {
      id: 0,
      content: '첫 번째 할 일',
      done: false
    },
    {
      id: 1,
      content: '두 번째 할 일',
      done: false
    },
    {
      id: 2,
      content: '세 번째 할 일',
      done: true
    },
    {
      id: 3,
      content: '네 번째 할 일',
      done: false
    },
  ];
</script>

<main>
  <ul>
    {#each list as item}
      <div>
        <p>
          <input type="checkbox" bind:checked={item.done} />
          {item.content}
        </p>
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
