<script>
  import { getContext } from 'svelte';
  import Neo from './Neo.svelte';
  import Emily from './Emily.svelte';

  const pocketMoney = getContext('heropy'); // 10000
</script>

<h2>Andreson({pocketMoney})</h2>
<ul>
  <li><Neo /></li>
  <li><Emily /></li>
</ul>
