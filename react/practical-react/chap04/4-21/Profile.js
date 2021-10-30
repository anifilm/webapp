// 코드 4-21 의존성 배열로 API 호출 횟수를 최적화하기
import React, { useEffect, useState } from 'react';

function Profile({ userId }) {
  const [user, setUser] = useState();
  useEffect(() => {
    fetchUser(userId).then((data) => setUser(data));
  }, [userId]);
  // ...

  return <div></div>;
}

export default Profile;
