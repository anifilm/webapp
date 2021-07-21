<template lang="pug">
  p.message 메시지: {{ message }}
</template>

<script lang="ts">
export default {
  data(): Object {
    return {
      message: '안녕하세요!'
    };
  }
};
</script>

<style lang="stylus">
vue-color = #42b983
.message
  color vue-color
</style>
