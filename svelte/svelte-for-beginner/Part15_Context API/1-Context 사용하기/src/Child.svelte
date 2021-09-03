<script>
  import { key } from './context';
  import { getContext } from 'svelte';

  const { context } = getContext(key);
</script>

<div>
  <h2>{context.name}</h2>
  <p>{context.job}</p>
  <p>{context.phone}</p>
</div>
