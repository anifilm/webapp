<script>
  import Parent from "./Parent.svelte"

  let name = "world"
</script>

<h1>Hello {name}!</h1>
<Parent name={name} />
