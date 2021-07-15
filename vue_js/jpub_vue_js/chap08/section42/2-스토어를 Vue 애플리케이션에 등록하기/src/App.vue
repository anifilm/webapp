<template></template>

<script>
export default {
  created() {
    // 스토어의 상태 확인하기
    console.log(this.$store.state.count);
    // 스토어의 상태 변경하기
    this.$store.commit('increment');
    // 값이 변경된 것을 확인
    console.log(this.$store.state.count);
  }
}
</script>
