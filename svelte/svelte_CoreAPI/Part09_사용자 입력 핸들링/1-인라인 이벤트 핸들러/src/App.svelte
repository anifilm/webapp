<script>
  let fruits = [
    { id: 1, name: 'Apple' },
    { id: 2, name: 'Banana' },
    { id: 3, name: 'Cherry' }
  ];

  function assign(fruit) {
    fruit.name += '!';
    fruits = fruits;
    // $$invalidate(0, fruits);
  }
</script>

<main>
  <section>
    {#each fruits as fruit (fruit.id)}
      <div on:click={() => {assign(fruit)}}>
        {fruit.name}
      </div>
    {/each}
  </section>

  <section>
    {#each fruits as fruit (fruit.id)}
      <div on:click={() => {fruit.name += '!'}}>
        {fruit.name}
      </div>
    {/each}
    <!-- $$invalidate(0, each_value_1[fruit_index].name += "!", fruits); -->
  </section>

  <section>
    {#each fruits as { id, name } (id)}
      <div on:click={() => {name += '!'}}>
        {name}
      </div>
    {/each}
    <!-- $$invalidate(0, each_value[each_index].name += "!", fruits); -->
  </section>
</main>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }
  section {
    text-align: left;
    margin: 10px;
    padding: 20px;
    border: 2px solid orange;
  }
  div {
    margin-bottom: 5px;
  }
  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
