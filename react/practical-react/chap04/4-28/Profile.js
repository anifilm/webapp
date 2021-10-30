// 코드 4-28 userId가 변경될 때만 fetchAndSetUser 함수 갱신
import React, { useEffect, useState } from 'react';

function Profile({ userId }) {
  const [user, setUser] = useState();

  const fetchAndSetUser = useCallback(
    async (needDetail) => {
      const data = await fetchUser(userId, needDetail);
      setUser(data);
    },
    [userId],
  );
  useEffect(() => {
    fetchAndSetUser(false);
  }, [fetchAndSetUser]);
  // ...

  return <div></div>;
}

export default Profile;
