<script>
  import { count, name } from './store.js';

  // 스토어 자동 구독으로 내용 구성
  function increase() {
    $count += 1;
  }
  function changeName() {
    $name = 'Neo';
  }
</script>

<button on:click={increase} on:click|once={changeName}>Click me!</button>
<h2>{$count}</h2>
<h2>{$name}</h2>
