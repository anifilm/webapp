// 코드 4-26 useEffect 훅 밖에서 fetchAndSetUser 함수가 필요한 경우
import React, { useEffect, useState } from 'react';

function Profile({ userId }) {
  const [user, setUser] = useState();
  useEffect(() => {
    async function fetchAndSetUser(needDetail) {
      const data = await fetchUser(userId, needDetail);
      setUser(data);
    }
    fetchAndSetUser(false);
  }, [userId]);

  if (!user) {
    return <h1>로딩...</h1>;
  }

  return (
    <div>
      <h1>{user.name}</h1>
      <p>{`캐시: ${user.cash}`}</p>
      <p>{`계정 생성일: ${user.createAt}`}</p>
      <button onClick={() => fetchAndSetUser(true)}>더보기</button>
      <UserDetail user={user} />
    </div>
  );
}

export default Profile;
