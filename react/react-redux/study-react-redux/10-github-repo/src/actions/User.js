import fetchJsonp from 'fetch-jsonp';
import { replace } from 'react-router-redux';

const API_URL = 'http://api.github.com/users';

// category를 포함하도록 payload를 수정
// 요청 시작
const startRequest = (category) => ({
  type: 'START_REQUEST',
  payload: {
    category,
  },
});

// 응답 받음
const receiveData = (category, error, response) => ({
  type: 'RECEIVE_DATA',
  payload: {
    category,
    error,
    response,
  },
});

// 요청 완료
const finishRequest = (category) => ({
  type: 'FINISH_REQUEST',
  payload: {
    category,
  },
});

// 사용자 추출
export const fetchUser = (user) => {
  // redux-thunk를 사용한 비동기 처리
  return async (dispatch, getState) => {
    // 카테고리 ID에 대응하는 state.users.categories의 요소 추출
    const categories = getState().users.categories;
    const category = categories.find((category) => category.id === user);
    // 대응하는 데이터가 없을 경우 최상위 페이지로 리다이렉트
    if (typeof category === 'undefined') {
      dispatch(replace('/'));
      return;
    }

    // user를 category로 변경
    dispatch(startRequest(category));

    try {
      const response = await fetchJsonp(`${API_URL}/${user}/repos`);
      const data = await response.json();
      dispatch(receiveData(category, null, data));
    } catch (err) {
      dispatch(receiveData(category, err));
    }

    dispatch(finishRequest(category));
  };
};
