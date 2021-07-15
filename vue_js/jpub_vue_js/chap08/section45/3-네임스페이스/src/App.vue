<template></template>

<script>
import store from '@/store.js';

export default {
  created() {
    console.log(store.state.moduleA.count); // 1
    store.commit('moduleA/update'); // moduleA의 update 커밋하기
    console.log(store.state.moduleA.count); // 101

    console.log(store.state.moduleB.count); // 2
    store.commit('moduleB/update'); // moduleB의 update 커밋하기
    console.log(store.state.moduleB.count); // 202
  }
};
</script>
