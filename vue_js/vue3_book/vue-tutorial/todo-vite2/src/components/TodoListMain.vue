<template></template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    let counter = ref(0);

    return {
      counter,
    };
  },
};
</script>
