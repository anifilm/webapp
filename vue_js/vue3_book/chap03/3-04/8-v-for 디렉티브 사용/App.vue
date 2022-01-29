<template>
  <div style="width: 200px">
    <ol>
      <li v-for="item in items">{{ item }}</li>
    </ol>
  </div>
</template>

<script>
import { reactive } from 'vue';

export default {
  // Composition API
  setup() {
    const items = reactive(['1번 아이템', '2번 아이템', '3번 아이템'])

    return {
      items
    };
  }
};
</script>
