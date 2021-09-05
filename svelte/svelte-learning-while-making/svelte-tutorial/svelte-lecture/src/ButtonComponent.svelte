<script>
  import { count } from './store';

  function handleIncrementCount() {
    $count += 1;
  }
</script>

<button on:click={handleIncrementCount}>
  increment count [{$count}]
</button>
