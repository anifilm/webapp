<!-- 외부파일 임포트
<template src="./template.html"></template>
<script src="./script.js"></script>
<style src="./style.css"></style>
-->

<template>
  <p class="message">메시지: {{ message }}</p>
</template>

<script>
export default {
  data() {
    return {
      message: '안녕하세요!'
    };
  }
};
</script>

<style src="./style.css"></style>
