<script>
  import { onMount } from 'svelte';
  import { lists } from '~/store/list';

  import List from './List.svelte';
  import CreateList from './CreateList.svelte';

  // lists 스토어의 값($lists)이 변경되면 아래 반응성 구문이 실행된다.
  $: {
    console.log($lists);
  }
</script>

<div class="list-container">
  <div class="lists">
    <!-- <div class="list"></div> -->
    {#each $lists as list (list.id)}
      <List title={list.title} />
    {/each}
  </div>
  <!--<div class="create-list"></div>-->
  <CreateList />
</div>

<style lang="scss">
  .list-container {
    width: 100vw;
    height: calc(100vh - 40px);
    padding: 30px;
    border: 10px solid red;
    box-sizing: border-box;
    overflow-x: auto;
    overflow-y: hidden;
    white-space: nowrap;
    font-size: 0;
    .lists {
      white-space: nowrap;
      font-size: 0;
      display: inline-block;
      height: 100%;
      border: 10px solid blue;
      box-sizing: border-box;
    }
  }
</style>
