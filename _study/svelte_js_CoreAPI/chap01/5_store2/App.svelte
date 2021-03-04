<script>
  import { storeName } from './store.js'
  import Parent from './Parent.svelte'

  let name = 'world'

  console.log(storeName)  // 스토어 객체는 set, update, subscribe 메서드를 가진다.
  console.log($storeName) // 불러들인 스토어 객체의 변수에 $를 붙이면 Auto-subscription 이 되며 값을 바로 가져올 수 있다.

  $storeName = name // "world"
</script>

<h1>Hello {name}!</h1>
<Parent />
