<template>
  <div>
    <button v-on:click="increaseCounter">Add 1</button>
    <p>The counter is {{ counter }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      counter: 0
    };
  },
  methods: {
    increaseCounter() {
      this.counter += 1;
    }
  }
};
</script>
