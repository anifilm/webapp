<script>
  import { count } from './store.js';

  function decrement() {
    $count -= 1;
  }
</script>

<button on:click={decrement}>-</button>
