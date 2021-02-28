<script>
  let text = '';
</script>

<h1>
  {text}
</h1>

<input type="text" value={text} on:input={(e) => {text = e.target.value}} />
<input type="text" bind:value={text} /> // 위와 동일한 문장

<button on:click={() => {text = 'anifilm'}}>
  Click
</button>
