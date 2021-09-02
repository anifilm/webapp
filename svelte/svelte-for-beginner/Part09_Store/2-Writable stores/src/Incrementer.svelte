<script>
  import { count } from './store.js';

  function increment() {
    count.update((n) => {
      return n + 1;
    });
  }
</script>

<button on:click={increment}>+</button>
