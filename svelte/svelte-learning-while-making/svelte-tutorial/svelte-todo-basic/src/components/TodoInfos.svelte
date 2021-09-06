<script>
  import Constant from '../constant';
  export let viewMode;
  export let handleChangeViewMode;
  export let todoCount;
</script>

<div class="info">
  <div class="wrap">
    <span>COUNT: {todoCount}</span>
    <div>
      <button class:selected={viewMode === Constant.ALL} class="btn" on:click={() => handleChangeViewMode(Constant.ALL)}
        >ALL</button
      >
      <button
        class:selected={viewMode === Constant.ACTIVE}
        class="btn"
        on:click={() => handleChangeViewMode(Constant.ACTIVE)}>ACTIVE</button
      >
      <button
        class:selected={viewMode === Constant.DONE}
        class="btn"
        on:click={() => handleChangeViewMode(Constant.DONE)}>DONE</button
      >
    </div>
  </div>
</div>
