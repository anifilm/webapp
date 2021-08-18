import { readable } from 'svelte/store';

const userData = {
  name: 'Heropy',
  age: 85,
  email: 'thesecon@gmail.com',
  token: 'Ag1oy1hsdSDe'
};

export let user = readable(userData, (set) => {
  console.log('user 구독자가 1명 이상일 때!');
  delete userData.token;
  set(userData);
  return () => {
    console.log('user 구독자가 0명일 때...');
  };
});
