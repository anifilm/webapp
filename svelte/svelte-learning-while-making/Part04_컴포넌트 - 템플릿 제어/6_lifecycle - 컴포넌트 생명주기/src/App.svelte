<script>
  import { onMount, onDestroy, beforeUpdate, afterUpdate, tick } from 'svelte';
  import Child from './Child.svelte';

  onMount(async () => {
    console.log('App onMount');
  });

  onDestroy(async () => {
    console.log('App onDestroy');
  });

  beforeUpdate(async () => {
    console.log('App beforeUpdate');
  });

  afterUpdate(async () => {
    console.log('App afterUpdate');
  });
</script>

<Child />
