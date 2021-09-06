<script>
  export let count;

  function add() {
    count += 1;
  }
</script>

<button on:click={add}>추가</button>
