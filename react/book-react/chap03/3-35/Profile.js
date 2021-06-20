// 코드 3-35 여러 개의 훅 사용하기
import React, { useEffect, useState } from 'react';

function Profile() {
  const [age, setAge] = useState(0);
  const [name, setName] = useState('');
  // ...
  useEffect(() => {
    // ...
    setAge(23);
  }, []);
  // ...

  return <div></div>;
}

export default Profile;
