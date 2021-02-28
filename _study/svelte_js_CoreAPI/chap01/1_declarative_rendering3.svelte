<script>
  let name = 'world';
  let age = 85;
  function assign() {
    name = 'anifilm';
    age = 44;
  }
</script>

<h1>Hello {name}!</h1>
<h2>{age}</h2>
<p><img src="" alt={name} /></p>
<input type="text" bind:value={name} />
<button on:click={assign}>Assign</button>
