<script>
  import Child from "./Child.svelte";
</script>

<Child let:scoped>
  <slot></slot>
  <slot name="named" slot="named-child"></slot>
  <slot name="scoped" slot="scoped-child" scoped={scoped}></slot>
</Child>
