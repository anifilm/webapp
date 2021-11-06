<template>
  <div>
    <h2>Provide Inject</h2>
    <p>itemLength: {{ itemLength }}</p>
  </div>
</template>

<script>
export default {
  inject: [
    'itemLength'
  ],
  mounted() {
    console.log(this.itemLength);
  }
};
</script>
