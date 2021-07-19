<script>
  import Child from "./Child.svelte"

  export let name
</script>

<div>Parent</div>
<Child name={name} />

<!--
현재는 메인 App에서 Child로 데이터를 전달해주기 위해서 Parent를 경유하고 있다.
만약 이 단계가 복잡해 진다면 관리가 어려워 질 수 있는데 이 때 Store를 사용하여
손쉽게 데이터를 전달해주고 또한 받을 수도 있다.
-->
