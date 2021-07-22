<template>
  <div>
    <h2>태스크 목록</h2>
    <ul>
      <li v-for="task in tasks" v-bind:key="task.id">
        <input type="checkbox" v-bind:checked="task.done">
        {{ task.name }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  computed: {
    tasks() {
      // 스토어 읽기
      return this.$store.state.tasks;
    }
  }
};
</script>
