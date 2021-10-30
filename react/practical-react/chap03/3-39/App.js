// 코드 3-39 Profile 컴포넌트가 다시 렌더링되지 않도록 React.memo를 사용한 코드
import React, { useState } from 'react';

const UserContext = React.createContext('');

function App() {
  const [username, setUsername] = useState('');

  return (
    <div>
      <UserContext.Provider value={username}>
        <Profile />
      </UserContext.Provider>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
    </div>
  );
}

const Profile = React.memo(() => {
  return (
    <div>
      <Greeting />
      {/* ... */}
    </div>
  );
});

function Greeting() {
  return (
    <UserContext.Consumer>
      {(username) => <p>{`${username}님 안녕하세요.`}</p>}
    </UserContext.Consumer>
  );
}

export default App;
