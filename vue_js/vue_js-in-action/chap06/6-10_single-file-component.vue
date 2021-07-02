<template>
  <div class="hello">
    {{ msg }}
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Vue.js 앱에 오신걸 환영합니다'
    }
  }
}
</script>

<!-- 해당 컴포넌트만으로 CSS의 적용 범위를 제한한다면 'scoped' 속성을 사용 -->
<style scoped>

</style>
