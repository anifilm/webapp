<script>
  let name = 'world';
  let age = 85;
  function assign() {
    name = 'anifilm';
    age = 44;
  }
</script>

<h1>Hello {name}!</h1>
<h2 class={age < 85 ? 'active' : ''}>
  {age}
</h2>
<p><img src="" alt={name} /></p>
<input type="text" bind:value={name} />
<button on:click={assign}>Assign</button>

<style>
  h1 {
    color: red;
  }
  .active {
    color: blue;
  }
</style>
