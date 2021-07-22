<template>
  <div>
    <h2>태스크 목록</h2>
    <ul>
      <li v-for="task in tasks" v-bind:key="task.id">
        <input
          type="checkbox"
          v-bind:checked="task.done"
          v-on:change="toggleTaskStatus(task)"
        />
        {{ task.name }}
      </li>
    </ul>
    <form v-on:submit.prevent="addTask">
      <input type="text" v-model="newTaskName" placeholder="새 태스크" />
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 입력 중인 새로운 태스크를 임시 저장
      newTaskName: ''
    };
  },
  computed: {
    tasks() {
      // 스토어 읽기
      return this.$store.state.tasks;
    }
  },
  methods: {
    // 태스크 추가
    addTask() {
      // addTask 뮤테이션 커밋
      this.$store.commit('addTask', { name: this.newTaskName });
      this.newTaskName = '';
    },
    // 태스크 완료 상태 토글
    toggleTaskStatus(task) {
      // toggleTaskStatus 뮤테이션 커밋
      this.$store.commit('toggleTaskStatus', { id: task.id });
    }
  }
};
</script>
