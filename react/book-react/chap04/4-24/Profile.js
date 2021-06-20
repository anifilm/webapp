// 코드 4-24 부수 효과 함수를 async await로 만든 예
import React, { useEffect, useState } from 'react';

function Profile({ userId }) {
  const [user, setUser] = useState();
  useEffect(async () => {
    const data = await fetchUser(userId);
    setUser(data);
  }, [userId]);
  // ...

  return <div></div>;
}

export default Profile;
