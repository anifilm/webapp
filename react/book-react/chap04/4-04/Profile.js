// 코드 4-4 각 기능을 커스텀 훅으로 분리하기
import React, { useEffect, useState } from 'react';

function Profile({ userID }) {
  const user = useState(userId);
  const width = useWindowWidth();
  // ...
}

function useUser(userId) {
  const [user, serUser] = useState(null);
  useEffect(() => {
    getUserApi(userId).then((data) => setUser(data));
  }, [userId]);
  return user;
}

function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const onResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('resize', onResize);
    };
  }, []);
  return width;
}

export default Profile;
