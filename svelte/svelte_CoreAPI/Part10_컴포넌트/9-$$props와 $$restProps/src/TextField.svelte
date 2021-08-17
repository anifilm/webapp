<script>
  export let value;
  export let color;
  // $$props
  // $$restProps
</script>

<div class="my-custom-input">
  <input bind:value={value} style="color: {color}" {...$$restProps} />
</div>

<style>
  .my-custom-input input {
    border-radius: 10px;
    padding: 10px 20px;
  }
</style>
