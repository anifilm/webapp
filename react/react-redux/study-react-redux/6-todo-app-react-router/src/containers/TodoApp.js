import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { inputTask, addTask } from '../actions/tasks';

import TodoApp from '../components/TodoApp';

function mapStateToProps(state) {
  return {
    task: state.tasks.task,
    tasks: state.tasks.tasks,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addTask(task) {
      dispatch(addTask(task));
    },
    inputTask(task) {
      dispatch(inputTask(task));
    },
    redirectToError() {
      dispatch(push('/error'));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoApp);
