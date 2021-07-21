<template>
  <p class="message">메시지: {{ message }}</p>
</template>

<script>
export default {
  data() {
    return {
      message: '안녕하세요!'
    };
  }
};
</script>

<style>
.message {
  color: #42b983;
}
</style>
