<script>
  import { count } from './store.js';

  function reset() {
    $count = 0;
  }
</script>

<button on:click={reset}>reset</button>
