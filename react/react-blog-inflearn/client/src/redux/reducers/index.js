import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import authReducer from "./authReducer.js";

const createRootReducer = (history) => {
  return combineReducers({
    router: connectRouter(history),
    auth: authReducer,
  });
};

export default createRootReducer;
