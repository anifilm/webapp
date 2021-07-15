<template></template>

<script>
import store from '@/store.js';

export default {
  created() {
    console.log(store.state.moduleA.count); // 1
    console.log(store.state.moduleB.count); // 2
    store.commit('update');
    console.log(store.state.moduleA.count); // 101
    console.log(store.state.moduleB.count); // 202
  }
};
</script>
