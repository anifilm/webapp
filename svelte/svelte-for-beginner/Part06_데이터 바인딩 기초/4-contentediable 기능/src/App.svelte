<script>
  let html = '<p>텍스트 입니다.</p>';
</script>

<main>
  <div contenteditable="true" bind:innerHTML={html}></div>
  <pre>{html}</pre>
</main>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }
  [contenteditable] {
    padding: 0.5em;
    border: 1px solid #eee;
    border-radius: 4px;
  }
  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
