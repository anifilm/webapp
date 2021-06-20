// 코드 4-29 부수 효과 함수 내에서 분기 처리하기
import React, { useEffect, useState } from 'react';

function Profile({ userId }) {
  const [user, setUser] = useState();

  async function fetchAndSetUser(needDetail) {
    const data = await fetchUser(userId, needDetail);
    setUser(data);
  }
  useEffect(() => {
    if (!user || user.id !== userId) {
      fetchAndSetUser(false);
    }
  });
  // ...

  return <div></div>;
}

export default Profile;
