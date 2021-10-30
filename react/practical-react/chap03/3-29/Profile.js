// 코드 3-29 useEffect 훅에서 API 호출하기
import React, { useEffect, useState } from 'react';

function Profile({ userId }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    getUserApi(userId)
      .then((data) => setUser(data)
      );
  }, [userId]);

  return (
    <div>
      {!user && <p>사용자 정보를 가져오는 중...</p>}
      {user && (
        <>
          <p>{`name is ${user.name}`}</p>
          <p>{`age is ${user.age}`}</p>
        </>
      )}
    </div>
  );
}

export default Profile;
