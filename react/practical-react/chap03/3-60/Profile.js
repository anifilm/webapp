// 코드 3-60 useReducer 훅과 콘텍스트 API를 이용해서 이벤트 처리 함수를 전달하기
import React, { useReducer } from 'react';

const INITIAL_STATE = { name: 'empty', age: 0 };

function reducer(state, action) {
  switch (action.type) {
    case 'setName':
      return { ...state, name: action.name };
    case 'setAge':
      return { ...state, age: action.age };
    default:
      return state;
  }
}

export const ProfileDispatch = React.createContext(null);

function Profile() {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  return (
    <div>
      <p>{`name is ${state.name}`}</p>
      <p>{`age is ${state.age}`}</p>
      <ProfileDispatch.Provider value={dispatch}>
        <SomeComponent />
      </ProfileDispatch.Provider>
    </div>
  );
}

export default Profile;
