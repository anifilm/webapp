<script>
  import CreateList from './CreateList.svelte';
  import List from './List.svelte';
</script>

<div class="list-container">
  <div class="lists">
    <!-- <div class="list"></div> -->
    <List />
    <List />
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
