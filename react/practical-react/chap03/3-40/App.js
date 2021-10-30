// 코드 3-40 Privider, Consumer 컴포넌트를 중첩해서 사용한 예
import React from 'react';

const UserContext = React.createContext('');
const ThemeContext = React.createContext('dark');

function App() {
  return (
    <div>
      <ThemeContext.Provider value="light">
        <UserContext.Provider value="mike">
          <div>상단 메뉴</div>
          <Profile />
          <div>하단 메뉴</div>
        </UserContext.Provider>
      </ThemeContext.Provider>
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

function Greeting() {
  return (
    <ThemeContext.Consumer>
      {(theme) => (
        <UserContext.Consumer>
          {(username) => (
            <p
              style={{ color: theme === 'dark' ? 'gray' : 'green' }}
            >{`${username}님 안녕하세요.`}</p>
          )}
        </UserContext.Consumer>
      )}
    </ThemeContext.Consumer>
  );
}

export default App;
