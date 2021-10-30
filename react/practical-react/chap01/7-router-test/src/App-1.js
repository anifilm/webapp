// 코드 1-43 브라우저 히스토리 API의 동작을 확인하는 코드
import React, { useEffect } from 'react';

function App() {
  useEffect(() => {
    window.onpopstate = (event) => {
      console.log(`location: ${document.location}, state: ${event.state}`);
    };
  }, []);

  return (
    <div>
      <button onClick={() => window.history.pushState('v1', '', '/page1')}>page1</button>
      <button onClick={() => window.history.pushState('v2', '', '/page2')}>page2</button>
    </div>
  );
}

export default App;
