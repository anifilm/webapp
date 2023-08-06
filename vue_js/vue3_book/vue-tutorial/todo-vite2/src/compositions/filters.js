import { inject } from 'vue';

export const useFilter = () => {
  const today = inject('todya');
  const fnSort = (a, b) => {
    const a_date = Date.parse(a.date);
    const b_date = Date.parse(b.date);
    if (a_date > b_date) return 1;
    else if (a_date < b_date) return 0;
    else return a.id - b.id;
  };

  const getPendingTodos = (todos) => {
    return todos.value
      .filter((todo) => todo.date < today && !todo.completed)
      .slice()
      .sort(fnSort);
  };

  const getActivateTodayTodos = (todos) => {
    return todos.value
      .filter((todo) => todo.date == today && !todo.completed)
      .slice()
      .sort(fnSort);
  };

  const getCompletedTodayTodos = (todos) => {
    return todos.value
      .filter((todo) => (todo.date == today) & todo.completed)
      .slice()
      .sort(fnSort);
  };

  const getAllTodayTodos = (todos) => {
    return getActivateTodayTodos(todos)
      .concat(getCompletedTodayTodos(todos))
      .slice()
      .sort(fnSort);
  };

  const getAllTodos = (todos) => {
    return todos.value.slice().sort(fnSort);
  };

  return {
    getPendingTodos,
    getActivateTodayTodos,
    getCompletedTodayTodos,
    getAllTodayTodos,
    getAllTodos,
  };
};
