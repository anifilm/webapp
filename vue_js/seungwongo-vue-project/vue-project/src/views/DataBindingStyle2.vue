<template>
  <div class="container" v-bind:style="[baseStyle, addStyle]">
    인라인 스타일 바인딩
  </div>
</template>

<script>
export default {
  data() {
    return {
      baseStyle: 'background-color: yellow; font-weight: bold;',
      addStyle: 'color: red;'
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
