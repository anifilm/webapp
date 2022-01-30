<template>
  <div class="date">
    {{ date }}
  </div>
  <div class="date2">
    {{ date2 }}
  </div>
</template>

<script>
export default {
  // Composition API
  setup() {
    const date = Date().toString();
    return {
      date,
    };
  },
  // Options API
  data() {
    return {
      date2: Date().toString(),
    };
  },
};
</script>
