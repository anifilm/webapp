<script>
  let count = 0;

  $: {
    console.log(`the count is ${count}`);
    alert(`I SAID THE COUNT IS ${count}`);
  }

  function handleClick() {
    count += 1;
  }
</script>

<button on:click={handleClick}>
  Clicked {count} {count === 1 ? 'time' : 'times'}
</button>
