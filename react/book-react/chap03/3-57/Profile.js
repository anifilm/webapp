// 코드 3-57 useCallback 훅이 필요한 예
import React, { useState } from 'react';
import { saveToServer } from './api';
import UserEdit from './UserEdit';

function Profile() {
  const [name, setName] = useState('');
  const [age, setAge] = useState(0);

  return (
    <div>
      <p>{`name is ${name}`}</p>
      <p>{`age is ${age}`}</p>
      <UserEdit
        onSave={() => saveToServer(name, age)}
        setName={setName}
        setAge={setAge}
      />
    </div>
  );
}

export default Profile;
