import { writable, derived } from 'svelte/store';

export let count = writable(0);
export let double = derived(count, ($count) => {
  return $count * 2;
});
export let total = derived([count, double], ([$count, $double], set) => {
  // 클릭시 마다 구독이 해제 되었다가 재 구독하게 된다.
  console.log('total 구독자가 1명 이상일 때!');
  set($count + $double);
  return () => {
    console.log('total 구독자가 0명일 때...');
  };
});
export let initialValue = derived(
  count,
  ($count, set) => {
    setTimeout(() => {
      set($count + 1);
    }, 1000);
  },
  '최초 계산 중...'
);
