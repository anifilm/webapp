<template>
  <div>
    <h2>Calculator</h2>
    <div>
      <input type="text" v-model="state.num1" />
      <span> + </span>
      <input type="text" v-model="state.num2" />
      <span> = </span>
      <span>{{ state.result }}</span>
    </div>
  </div>
</template>

<script>
import { reactive, computed } from 'vue'; // computed 추가

export default {
  name: 'calcluator',
  setup() {
    let state = reactive({
      num1: 0,
      num2: 0,
      result: computed(() => parseInt(state.num1) + parseInt(state.num2))
      // computed를 이용해서 num1, num2가 변경이 일어나면 즉시 result로 더함 값을 반환
    });
    return {
      state
    }
  }
}
</script>

<style>

</style>
