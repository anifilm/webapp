// 코드 3-41 콘텍스트 데이터를 수정할 수 있는 함수 전달하기
import React, { useState } from 'react';

const UserContext = React.createContext({ username: '', helloCount: 0 });
const SetUserContext = React.createContext(() => {});

function App() {
  const [user, setUser] = useState({ username: 'mike', helloCount: 0 });

  return (
    <div>
      <SetUserContext.Provider value={setUser}>
        <UserContext.Provider value={user}>
          <Profile />
        </UserContext.Provider>
      </SetUserContext.Provider>
    </div>
  );
}

function Profile() {
  return (
    <div>
      <Greeting />
      {/* ... */}
    </div>
  );
}

// 코드 3-42 하위 컴포넌트에서 콘텍스트 데이터 수정하기
function Greeting() {
  return (
    <SetUserContext.Consumer>
      {(setUser) => (
        <UserContext.Consumer>
          {({ username, helloCount }) => (
            <React.Fragment>
              <p>{`${username}님 안녕하세요.`}</p>
              <p>{`인사 횟수: ${helloCount}`}</p>
              <button
                onClick={() =>
                  setUser({ username, helloCount: helloCount + 1 })
                }
              >
                인사하기
              </button>
            </React.Fragment>
          )}
        </UserContext.Consumer>
      )}
    </SetUserContext.Consumer>
  );
}

export default App;
