import axios from 'axios';
import { call, put, takeEvery, all, fork } from 'redux-saga/effects';

import {
  LOGIN_FAILURE,
  LOGIN_SUCCESS,
  LOGIN_REQUEST,
  LOGOUT_SUCCESS,
  LOGOUT_FAILURE,
  LOGOUT_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
  REGISTER_REQUEST,
  USER_LOADING_SUCCESS,
  USER_LOADING_FAILURE,
  USER_LOADING_REQUEST,
  CLEAR_ERROR_REQUEST,
  CLEAR_ERROR_FAILURE,
  CLEAR_ERROR_SUCCESS,
  PASSWORD_EDIT_UPLOADING_SUCCESS,
  PASSWORD_EDIT_UPLOADING_REQUEST,
  PASSWORD_EDIT_UPLOADING_FAILURE,
} from '../types';

// Login
const loginUserAPI = (loginData) => {
  console.log(loginData);
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  return axios.post('api/auth', loginData, config);
};

function* loginUser(action) {
  try {
    const result = yield call(loginUserAPI, action.payload);
    console.log(result);
    yield put({
      type: LOGIN_SUCCESS,
      payload: result.data,
    });
  } catch (e) {
    yield put({
      type: LOGIN_FAILURE,
      payload: e.response,
    });
  }
}

function* watchLoginUser() {
  yield takeEvery(LOGIN_REQUEST, loginUser);
}

export default function* authSaga() {
  yield all([
    fork(watchLoginUser),
  ]);
}
