<template>
  <div class="app">
    <h1>{{ message }}</h1>
    <EditForm />
  </div>
</template>

<script>
// 자식 컴포넌트 읽어 들이기
import EditForm from '@/components/EditForm';

export default {
  name: 'app',
  components: {
    EditForm
  },
  computed: {
    // 로컬 message와 스토어의 message 동기화하기
    message() {
      return this.$store.getters.message;
    }
  }
};
</script>
