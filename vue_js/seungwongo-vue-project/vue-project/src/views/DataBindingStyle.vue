<template>
  <div class="container" v-bind:style="styleObject">
    인라인 스타일 바인딩
  </div>
</template>

<script>
export default {
  data() {
    return {
      styleObject: {
        color: 'red',
        fontSize: '13px'
      }
    };
  }
};
</script>

<style scoped>
.container {
  width: 100%;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
