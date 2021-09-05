<script>
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();

  export let count;

  function handleIncrement(param) {
    dispatch('increment', {
      message: '값 증가: ' + param
    });
  }
</script>

<button
  on:click={() => {
    handleIncrement(10);
  }}
>
  increment count [{count}]
</button>
