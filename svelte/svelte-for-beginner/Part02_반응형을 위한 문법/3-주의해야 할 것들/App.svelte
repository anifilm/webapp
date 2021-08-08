<script>
  let numbers = [1, 2, 3, 4];

  $: sum = numbers.reduce((acc, cur) => acc + cur, 0);

  function addNumber() {
    //numbers = [...numbers, numbers.length + 1];
    numbers.push(numbers.length + 1);
    numbers = numbers;

    console.log(sum);
    if (sum >= 20) {
      alert('error');
    }
  }
</script>

<main>
  <p>{numbers.join(' + ')} = {sum}</p>
  <button on:click={addNumber}>Add a number</button>
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
