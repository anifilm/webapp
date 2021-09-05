<script>
  import { getContext } from 'svelte';

  export let count;

  const handleIncrementCount = getContext('incrementCount');
  //let count = getContext('count');
  // 반응성으로 동작하지 않으므로 count값이 증가하지 않는다.
</script>

<button on:click={handleIncrementCount}>
  increment count [{count}]
</button>
