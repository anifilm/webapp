// 코드 3-31 useUser 커스텀 훅
import React, { useEffect, useState } from 'react';

function useUser(userId) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    getUserApi(userId)
      .then((data) => setUser(data)
      );
  }, [userId]);

  return user;
}

function Profile({ userId }) {
  const user = useUser(userId);

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
