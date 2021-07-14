<template>
  <div class="example">
    <span class="title">{{ text }}</span>
  </div>
</template>

<script>
export default {
  name: 'Example',
  data() {
    return {
      text: 'example'
    };
  }
};
</script>

<!-- scoped CSS -->
<style scoped>
.title {
  color: #ffbb00;
}
</style>
