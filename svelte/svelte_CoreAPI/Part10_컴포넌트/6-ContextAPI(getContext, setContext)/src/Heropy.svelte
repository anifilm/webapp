<script>
  import { getContext, setContext } from 'svelte';
  import Andreson from './Andreson.svelte';

  setContext('heropy', 10000);
  const pocketMoney = getContext('heropy'); // 10000
</script>

<h1>Heory({pocketMoney})</h1>
<ul>
  <li><Andreson /></li>
</ul>

<style>
  h1 {
    color: red;
  }
</style>
