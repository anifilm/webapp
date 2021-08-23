<script>
  import { afterUpdate } from 'svelte';

  export let fruit;

  let updateCount = 0;

  afterUpdate(() => {
    updateCount += 1;
  });
</script>

<!--<svelte:options immutable={true} />-->
<div>{fruit} ({updateCount})</div>
