<script>
  import { key } from './context';
  import { setContext } from 'svelte';

  const context = {
    name: 'beomy',
    job: 'developer',
    phone: '010-1234-1234'
  };

  setContext(key, { context });
</script>

<div>
  <slot></slot>
</div>
