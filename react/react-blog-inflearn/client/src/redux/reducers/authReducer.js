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

const initialState = {
  token: localStorage.getItem('token'),
  isAuthenticated: null,
  isLoading: false,
  user: '',
  userId: '',
  userName: '',
  userRole: '',
  errorMsg: '',
  successMsg: '',
  previousMatchMsg: '',
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        errorMsg: '',
        isLoading: true,
      };
    case LOGIN_SUCCESS:
      localStorage.setItem('token', action.payload.token);
      return {
        ...state,
        ...action.payload,
        isAuthenticated: true,
        isLoading: false,
        userId: action.payload.user.id,
        userRole: action.payload.user.role,
        errorMsg: '',
      };
    case LOGIN_FAILURE:
      localStorage.removeItem('token');
      return {
        ...state,
        ...action.payload,
        token: null,
        user: null,
        userId: null,
        isAuthenticated: false,
        isLoading: false,
        userRole: null,
        errorMsg: action.payload.data.msg,
      };
    case CLEAR_ERROR_REQUEST:
      return {
        ...state,
      };
    case CLEAR_ERROR_SUCCESS:
      return {
        ...state,
        errorMsg: '',
        previousMatchMsg: '',
      };
    case CLEAR_ERROR_FAILURE:
      return {
        ...state,
        errorMsg: 'Clear Error Fail',
        previousMatchMsg: 'Clear Error Fail',
      };
    default:
      return state;
  }
};

export default authReducer;
