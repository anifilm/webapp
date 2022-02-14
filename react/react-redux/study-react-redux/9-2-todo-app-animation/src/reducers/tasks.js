// 스토어 초기 상태 정의
const initialState = {
  task: '',
  tasks: [],
};

// 리듀서 정의
export default function tasksReducer(state=initialState, action) {
  switch (action.type) {
    case 'INPUT_TASK':
      return {
        ...state,
        task: action.payload.task,
      };
    case 'ADD_TASK':
      return {
        ...state,
        tasks: state.tasks.concat([action.payload.task]),
      };
    default:
      return state;
  }
}
