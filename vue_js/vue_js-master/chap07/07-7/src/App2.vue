<template>
  <div>
    <p>{{ count }}</p>
    <button v-on:click="increment(1)">증가</button>
  </div>
</template>

<script>
// 컴포넌트에서 스토어 접근하기 - 헬퍼 함수를 사용해 접근하기
// mapState와 mapMutations를 임포트
import { mapState, mapMutations } from 'vuex';

export default {
  // $store.state.count와 this.count를 연결
  computed: mapState(['count']),
  // this.increment(value)에서 $store.commit('increment', value)를 호출
  methods: mapMutations(['increment'])
};
</script>
