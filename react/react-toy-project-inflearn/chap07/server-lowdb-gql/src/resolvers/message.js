import { v4 } from 'uuid';
import db from '../dbController.js';

//const setMessages = (data) => {
//  writeDB('messages', data);
//};

/*
 * parent: parent 객체. 거의 사용X
 * args: Query에 필요한 필드에 제공되는 인수(parameter)
 * context: 로그인한 사용자. DB Access 등의 중요한 정보들
 */
const messageResolver = {
  Query: {
    messages: (parent, { cursor='' }, { models }) => {
      const fromIndex = models.messages.findIndex((message) => message.id === cursor) + 1;
      return models.messages?.slice(fromIndex, fromIndex + 15) || [];
    },
    message: (parent, { id='' }, { models }) => {
      return models.messages.find((message) => {
        return message.id === id;
      });
    },
  },
  Mutation: {
    createMessage: (parent, { text, userId }, { models }) => {
      if (!userId) throw Error('사용자가 없습니다.');
        const newMessage = {
          id: v4(),
          text: text,
          userId: userId,
          timestamp: Date.now(),
        };
      models.messages.unshift(newMessage);
      db.write();
      return newMessage;
    },
    updateMessage: (parent, { id, text, userId }, { models }) => {
      const targetIndex = models.messages.findIndex((message) => {
        return message.id === id;
      });
      if (targetIndex < 0) throw Error('메세지가 없습니다.');
      if (models.messages[targetIndex].userId !== userId) throw Error('사용자가 다릅니다.');

      const newMessage = {
        ...models.messages[targetIndex],
        text: text,
      };
      models.messages.splice(targetIndex, 1, newMessage);
      db.write();
      return newMessage;
    },
    deleteMessage: (parent, { id, userId }, { models }) => {
      const targetIndex = models.messages.findIndex((message) => {
        return message.id === id;
      });
      if (targetIndex < 0) throw Error('메세지가 없습니다.');
      if (models.messages[targetIndex].userId !== userId) throw Error('사용자가 다릅니다.');

      models.messages.splice(targetIndex, 1);
      db.write();
      return id;
    },
  },
};

export default messageResolver;
