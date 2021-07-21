<template>
  <div id="app">
    <h1 class="greeting">인사말: {{ message }}</h1>
    <Content />
  </div>
</template>

<script>
import Content from './content.vue';

export default {
  components: {
    Content
  },
  data() {
    return {
      message: '안녕하세요!'
    };
  }
};
</script>

<style>
.greeting {
  color: #42b983;
}
</style>
