<script>
  let active;
</script>

<main>
  <input type="checkbox" bind:checked={active} />
  boarder size

  <p class="box" class:checkBorder={active}>Style Box</p>
</main>

<style>
  .box {
    padding: 10px;
    border: 1px solid #ff003a;
  }
  .checkBorder {
    border: 5px solid #ff003a;
  }
</style>
