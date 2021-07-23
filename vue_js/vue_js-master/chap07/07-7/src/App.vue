<template>
  <div>
    <p>{{ count }}</p>
    <button v-on:click="increment(1)">증가</button>
  </div>
</template>

<script>
// 컴포넌트에서 스토어 접근하기 - this.$store를 통해 접근하기
export default {
  computed: {
    count() {
      // 스토어 안의 카운터 스테이트를 반환
      return this.$store.state.count;
    }
  },
  methods: {
    increment(value) {
      // increment 뮤테이션 커밋
      this.$store.commit('increment', value);
    }
  }
};
</script>
