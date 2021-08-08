<script>
  let value = '';
</script>

<main>
  <textarea bind:value={value} placeholder="텍스트를 입력하면 됩니다."></textarea>
  <p>{value}</p>
</main>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }
  textarea {
    width: 100%;
    height: 200px;
  }
  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
