<script>
  import { onMount, onDestroy } from 'svelte';

  let seconds = 0;

  const interval = setInterval(() => {
    seconds += 1;
    console.log('interval 중...');
  }, 1000);

  onMount(() => {
    return () => {
      console.log('onMount return');
    }
  });

  onDestroy(() => {
    console.log('onDestroy');
    clearInterval(interval);
  });
</script>

<p>{seconds}초</p>
