<script>
  import { tick } from 'svelte';

  let text = 'Hello Beomy';

  async function handleKeydown(event) {
    if (event.which !== 9) return;

    const { selectionStart, selectionEnd, value } = this;
    const selection = value.slice(selectionStart, selectionEnd);

    const replacement = /[a-z]/.test(selection)
      ? selection.toUpperCase()
      : selection.toLowerCase();

    text = (
      value.slice(0, selectionStart) + replacement + value.slice(selectionEnd)
    );

    await tick();
    this.selectionStart = selectionStart;
    this.selectionEnd = selectionEnd;
  }
</script>

<main>
  <textarea value={text} on:keydown|preventDefault={handleKeydown}></textarea>
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
