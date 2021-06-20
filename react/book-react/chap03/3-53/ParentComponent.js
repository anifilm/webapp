// 코드 3-53 훅을 사용하지 않고 콘텍스트 API를 사용하기
import React from 'react';

const UserContext = React.createContext();
const user = { name: 'mike', age: 23 };

function ParentComponent() {
  return (
    <div>
      <UserContext.Provider value={user}>
        <ChildComponent />
      </UserContext.Provider>
    </div>
  );
}

function ChildComponent() {
  return (
    <div>
      <UserContext.Consumer>
        {(user) => (
          <>
            <p>{`name is ${user.name}`}</p>
            <p>{`age is ${user.age}`}</p>
          </>
        )}
      </UserContext.Consumer>
    </div>
  );
}

export default ParentComponent;
