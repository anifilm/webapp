<template></template>

<script>
export default {
  created() {
    // 스토어에 저장된 값 호출하기
    console.log(this.$store.state.message);
  }
}
</script>
