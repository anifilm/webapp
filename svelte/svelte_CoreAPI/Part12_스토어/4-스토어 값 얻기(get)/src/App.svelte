<script>
  import { get } from 'svelte/store';
  import { count, double, user } from './store.js';

  console.log(get(count));
  console.log(get(double));
  console.log(get(user));
</script>
