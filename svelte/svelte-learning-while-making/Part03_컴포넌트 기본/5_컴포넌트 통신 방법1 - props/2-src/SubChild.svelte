<script>
  export let handleValueAdd;
</script>

<button
  on:click={(event) => {
    handleValueAdd(event, 10);
  }}>Add 10</button
>
<button
  on:click={(event) => {
    handleValueAdd(event, 20);
  }}>Add 20</button
>
