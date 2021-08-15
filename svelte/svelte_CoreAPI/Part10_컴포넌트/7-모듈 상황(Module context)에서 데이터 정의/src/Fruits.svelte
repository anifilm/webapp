<script context="module">
  export let count = 0;
  console.log('Module context!');
</script>

<script>
  export let fruit;
  let count_fruit = 0;
  console.log('Each component init!');
</script>

<div on:click={() => {
  count += 1;
  count_fruit += 1;
  console.log(fruit + ' ' + count_fruit);
}}>
  {fruit} - {count_fruit}
</div>
