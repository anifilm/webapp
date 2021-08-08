<script>
  import Child from './Child.svelte';
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();

  function handleMessage(event) {
    dispatch('message', event.detail);
  }
</script>

<Child on:message={handleMessage} />
