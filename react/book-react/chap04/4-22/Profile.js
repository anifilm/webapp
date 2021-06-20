// 코드 4-22 의존성 배열을 잘못 관리한 경우
import React, { useEffect, useState } from 'react';

function Profile({ userId }) {
  const [needDetail, setNeedDetail] = useState(false);
  useEffect(() => {
    fetchUser(userId, needDetail).then((data) => setUser(data));
  }, [userId]);
  // ...

  return <div></div>;
}

export default Profile;
