<template>
  <composition-api-inject />
</template>

<script>
import { provide } from 'vue'; // privide 추가
import CompositionAPIInject from './CompositionAPIInject.vue';

export default {
  components: {
    'composition-api-inject': CompositionAPIInject
  },
  setup() {
    provide('title', 'Vue.js 프로젝트');
    // privide 함수를 통해서 전달할 키(key), 값(value) 설정
  }
};
</script>
