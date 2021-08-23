<script>
  import { afterUpdate } from 'svelte';

  export let fruit;
  // 기존 fruit === 새로운 fruit 비교

  let updateCount = 0;

  afterUpdate(() => {
    updateCount += 1;
  });
</script>

<svelte:options immutable={true} />
<div>{fruit.name} ({updateCount})</div>
