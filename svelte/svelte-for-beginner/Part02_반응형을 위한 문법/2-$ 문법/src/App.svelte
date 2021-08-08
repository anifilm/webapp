<script>
  let count = 0;

  $: doubled = count * 2;

  function handleClick() {
    count += 1;
  }
</script>

<main>
  <button on:click={handleClick}>Clicked {count}</button>
  <p>{count} 값의 2배 값은 {doubled} 입니다.</p>
</main>

<style>
  main {
    text-align: center;
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
