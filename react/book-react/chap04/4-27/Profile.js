// 코드 4-27 fetchAndSetUser 함수를 useEffect 훅 밖으로 이동
import React, { useEffect, useState } from 'react';

function Profile({ userId }) {
  const [user, setUser] = useState();

  async function fetchAndSetUser(needDetail) {
    const data = await fetchUser(userId, needDetail);
    setUser(data);
  }
  useEffect(() => {
    fetchAndSetUser(false);
  }, [fetchAndSetUser]);
  // ...

  return <div></div>;
}

export default Profile;
