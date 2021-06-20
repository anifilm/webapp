// 코드 4-20 useEffect 훅에서 API를 호출하는 코드
import React, { useEffect, useState } from 'react';

function Profile({ userId }) {
  const [user, setUser] = useState();
  useEffect(() => {
    fetchUser(userId).then((data) => setUser(data));
  });
  // ...

  return <div></div>;
}

export default Profile;
