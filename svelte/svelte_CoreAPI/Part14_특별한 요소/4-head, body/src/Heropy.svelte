<script>
  import { loop_guard } from 'svelte/internal';
</script>

<!-- document.head -->
<svelte:head>
  <link rel="stylesheet" href="./main.css" />
</svelte:head>

<!-- document.body -->
<svelte:body
  on:mousemove={(event) => {
    console.log(event.clientX, event.clientY);
  }}
/>

<h1>Heropy!</h1>
