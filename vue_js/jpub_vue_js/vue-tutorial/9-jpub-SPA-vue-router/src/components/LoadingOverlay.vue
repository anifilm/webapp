<template>
  <transition name="loading">
    <div class="loading" v-if="loading">Loading</div>
  </transition>
</template>

<script>
export default {
  computed: {
    loading() {
      return this.$store.state.view.loading;
    }
  }
};
</script>

<style>
.loading {
  /* position:fixed; 등으로 스타일 정의 */
}
.loading-enter-active {
  transition: all 0.25s;
}
.loading-leave-active {
  transition: all 0.5s ease 0.5s; /* 라우터 뷰가 종료된 후 */
}
</style>
