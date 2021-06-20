// 코드 4-25 useEffect 훅에서 async await 함수 사용하기
import React, { useEffect, useState } from 'react';

function Profile({ userId }) {
  const [user, setUser] = useState();
  useEffect(() => {
    async function fetchAndSetUser() {
      const data = await fetchUser(userId);
      setUser(data);
    }
    fetchAndSetUser();
  }, [userId]);
  // ...

  return <div></div>;
}

export default Profile;
