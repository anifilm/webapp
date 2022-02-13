// 액션
export const inputTask = (task) => ({
  type: 'INPUT_TASK',
  payload: {
    task,
  },
});
// 액션
export const addTask = (task) => ({
  type: 'ADD_TASK',
  payload: {
    task,
  },
});
