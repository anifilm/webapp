<template>
  <div>
    <h3>바인드와 이벤트를 사용한 경우</h3>
    <input type="text" v-bind:value="message" v-on:input="doUpdate" />
    <h3>v-model을 사용한 경우</h3>
    <input v-model="message2" />
  </div>
</template>

<script>
export default {
  name: 'EditForm',
  computed: {
    message() {
      return this.$store.getters.message;
    },
    message2: {
      get() {
        return this.$store.getters.message;
      },
      set(value) {
        this.$store.dispatch('doUpdate', value);
      }
    }
  },
  methods: {
    doUpdate(event) {
      // input의 값을 기반으로 디스패치 하기
      this.$store.dispatch('doUpdate', event.target.value);
    }
  }
};
</script>

<style></style>
