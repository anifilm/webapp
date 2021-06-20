// 코드 4-2 여러 가지 기능이 섞여 있는 컴포넌트 코드
import React, { useEffect, useState } from 'react';

function Profile({ userId }) {
  const [user, setUser] = useState(null);
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    getUserApi(userId).then(data => setUser(data));
  }, [userId]);
  useEffect(() => {
    const onResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('resize', onResize);
    };
  }, []);

  // ...
}

export default Profile;
