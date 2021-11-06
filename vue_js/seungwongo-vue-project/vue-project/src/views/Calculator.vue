<template>
  <div>
    <h2>Calculator</h2>
    <div>
      <input type="text" v-model="num1" v-on:keyup="plusNumbers" />
      <span> + </span>
      <input type="text" v-model="num2" v-on:keyup="plusNumbers" />
      <span> = </span>
      <span>{{ result }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'calcluator',
  data() {
    return {
      num1: 0,
      num2: 0,
      result: 0
    };
  },
  methods: {
    plusNumbers() {
      this.result = parseInt(this.num1) + parseInt(this.num2);
    }
  }
}
</script>

<style>

</style>
