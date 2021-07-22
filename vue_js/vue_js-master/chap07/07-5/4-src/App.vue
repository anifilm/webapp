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
        {{ task.name }} -
        <span v-for="id in task.labelIds" v-bind:key="id">
          {{ getLabelText(id) }}
        </span>
      </li>
    </ul>
    <form v-on:submit.prevent="addTask">
      <input type="text" v-model="newTaskName" placeholder="새 태스크" />
    </form>
    <h2>레이블 목록</h2>
    <ul>
      <li v-for="label in labels" v-bind:key="label.id">
        <input
          type="checkbox"
          v-bind:value="label.id"
          v-model="newTaskLabelIds"
        />
        {{ label.text }}
      </li>
    </ul>
    <form v-on:submit.prevent="addLabel">
      <input type="text" v-model="newLabelText" placeholder="새 레이블" />
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 입력 중인 새로운 태스크를 임시 저장
      newTaskName: '',
      // 입력 중인 새로운 레이블을 임시 저장
      newLabelText: '',
      // 새로운 태스크와 연결된 레이블 목록을 임시 저장
      newTaskLabelIds: []
    };
  },
  computed: {
    tasks() {
      // 스토어 읽기
      return this.$store.state.tasks;
    },
    labels() {
      return this.$store.state.labels;
    }
  },
  methods: {
    // 태스크 추가
    addTask() {
      // addTask 뮤테이션 커밋
      this.$store.commit('addTask', {
        name: this.newTaskName,
        labelIds: this.newTaskLabelIds
      });
      this.newTaskName = '';
      this.newTaskLabelIds = [];
    },
    // 태스크 완료 상태 토글
    toggleTaskStatus(task) {
      // toggleTaskStatus 뮤테이션 커밋
      this.$store.commit('toggleTaskStatus', { id: task.id });
    },
    // 레이블 추가하기
    addLabel() {
      // addLabel 뮤테이션 커밋
      this.$store.commit('addLabel', { text: this.newLabelText });
      this.newLabelText = '';
    },
    // 레이블 ID로 레이블명 받아오기
    getLabelText(id) {
      const label = this.labels.filter(label => label.id === id)[0];
      return label ? label.text : '';
    }
  }
};
</script>
