import {
  createStore as reduxCreateStore, // 이름 충돌이 일어나므로 별칭으로 임포트
  combineReducers,
  applyMiddleware,
} from 'redux';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import * as reducers from '../reducers';

// history는 src/index.js에서 전달
export default function createStore(history) {
  return reduxCreateStore(
    combineReducers({
      ...reducers,
      router: routerReducer, // react-router-redux의 리듀서
    }),
    applyMiddleware(
      logger,
      //thunk,
      routerMiddleware(history), // react-router-redux의 리덕스 미들웨어
    ),
  );
}
