<script>
  import { user } from './store.js';

  // 어떤 메소드를 가지는지 Readable 스토어 출력하기
  console.log(user);
  console.log($user);
</script>

<button on:click={() => {$user.name = 'Neo'}}>Click!</button>
<h1>{$user.name}</h1>
