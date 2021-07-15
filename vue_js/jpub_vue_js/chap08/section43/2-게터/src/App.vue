<template>
  <div class="app">
    <h3>매개변수 없음</h3>
    <ol>
      <li>{{ count }}</li>
      <li>{{ max }}</li>
    </ol>
    <h3>매개변수 있음</h3>
    <ol>
      <li>{{ itemA }}</li>
      <li>{{ itemB(1) }}</li>
      <li>{{ nameA }}</li>
      <li>{{ nameB(1) }}</li>
    </ol>
  </div>
</template>

<script>
export default {
  computed: {
    // 매개변수가 없는 게터
    count() {
      return this.$store.getters.count;
    }, // 0
    max() {
      return this.$store.getters.max;
    }, // 3000
    // 매개변수가 있는 게터
    itemA() {
      return this.$store.getters.item(1);
    }, // { "id": 1, "name": "사과", "price": 1000 }
    itemB() {
      return this.$store.getters.item;
    }, // { "id": 1, "name": "사과", "price": 1000 }
    nameA() {
      return this.$store.getters.name(1);
    }, // 사과
    nameB() {
      return this.$store.getters.name;
    } // 사과
  }
};
</script>
