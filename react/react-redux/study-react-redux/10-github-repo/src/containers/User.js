import { connect } from 'react-redux';
import User from '../components/User';
import * as actions from '../actions/User';

// 리듀서를 정의한 후에 구현할 예정
const mapStateToProps = (state, ownProps) => ({
  user: ownProps.user,
  // 정보들을 User 컴포넌트에 전달
  category: state.User.category,
  repos: state.User.repos,
  error: state.User.error,
});

const mapDispatchToProps = (dispatch) => ({
  // onMount와 onUpdate를 fetchUser와 연결
  onMount(user) {
    dispatch(actions.fetchUser(user));
  },
  onUpdate(user) {
    dispatch(actions.fetchUser(user));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(User);
