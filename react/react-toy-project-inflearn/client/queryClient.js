import { request } from 'graphql-request';

const URL = 'http://localhost:8000/graphql';

export const fetcher = (query, variables={}) => {
  return request(URL, query, variables);
};

export const QueryKeys = {
  MESSAGES: 'MESSAGES',
  MESSAGE: 'MESSAGE',
  USERS: 'USERS',
  USER: 'USER',
};

export const findTargetMsgIndex = (pages, id) => {
  let messageIndex = -1;
  const pageIndex = pages.findIndex(({ messages }) => {
    messageIndex = messages.findIndex((message) => message.id === id);
    if (msgIndex > -1) {
      return true;
    }
    return false;
  });
  return { pageIndex, messageIndex };
};

export const getNewMessages = (old) => ({
  pageParams: old.pageParams,
  pages: old.pages.map(({ messages }) => ({ messages: [...messages] })),
});
