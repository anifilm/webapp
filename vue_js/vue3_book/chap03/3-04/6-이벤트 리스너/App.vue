<template>
  <p>{{ counter }} {{ counter2 }}</p>
  <button v-on:click="counter++">counter++</button>
  <button v-on:click="onClick">onClick</button>
  <button v-on:click="counter2++">counter2++</button>
  <button v-on:click="onClick2">onClick2</button>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    let counter = ref(0);

    const onClick = (event) => {
      if (event) {
        event.preventDefault();
      }
      counter.value++;
    };

    return {
      counter,
      onClick,
    };
  },
  data() {
    return {
      counter2: 0,
    };
  },
  methods: {
    onClick2(event) {
      if (event) {
        event.preventDefault();
      }
      this.counter2++;
    },
  },
};
</script>
