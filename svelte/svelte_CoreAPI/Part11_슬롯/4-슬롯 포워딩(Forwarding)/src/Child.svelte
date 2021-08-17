<script>
  let scoped = 'Scoped!!';
</script>

<slot name="scoped-child" scoped={scoped}></slot>
<slot name="named-child"></slot>
<slot></slot>
