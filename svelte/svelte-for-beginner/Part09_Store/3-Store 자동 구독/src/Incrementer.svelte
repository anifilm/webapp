<script>
  import { count } from './store.js';

  function increment() {
    $count += 1;
  }
</script>

<button on:click={increment}>+</button>
