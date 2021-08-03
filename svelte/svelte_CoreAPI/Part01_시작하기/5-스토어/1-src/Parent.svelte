<script>
  import Child from './Child.svelte';

  export let name;
</script>

<div>Parent</div>
<Child name={name} />
