import { writable } from 'svelte/store';
import cryptoRandomString from 'crypto-random-string';

// 10자의 고유(랜덤)한 문자열을 생성하는 함수
const crypto = () => {
  return cryptoRandomString({ length: 10 });
};
//console.log(crypto());

const repoLists = JSON.parse(window.localStorage.getItem('lists')) || [];

const _lists = writable(repoLists);
_lists.subscribe(($lists) => {
  window.localStorage.setItem('lists', JSON.stringify($lists));
});

export const lists = {
  subscribe: _lists.subscribe,
  reorder(payload) {
    const { oldIndex, newIndex } = payload;
  },
  add(payload) {
    const { title } = payload;
    _lists.update(($lists) => {
      $lists.push({
        id: crypto(),
        title: title,
        cards: []
      });
      return $lists;
    });
  },
  edit(payload) {
    const { listId, title } = payload;
  },
  remove(payload) {
    const { listId } = payload;
  }
};

export const cards = {
  reorder(payload) {
    const { fromListId, toListId, oldIndex, newIndex } = payload;
  },
  add(payload) {
    const { listId, title } = payload;
  },
  edit(payload) {
    const { listId, cardId, title } = payload;
  },
  remove(payload) {
    const { listId, cardId } = payload;
  }
};
