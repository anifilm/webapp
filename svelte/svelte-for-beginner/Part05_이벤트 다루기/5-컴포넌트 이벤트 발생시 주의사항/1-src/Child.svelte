<script>
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher(); // 최상위에 선언되어야 한다.

  function sayHello() {
    dispatch('message', {
      text: 'Hello!'
    });
  }
</script>

<button on:click={sayHello}>Click</button>
