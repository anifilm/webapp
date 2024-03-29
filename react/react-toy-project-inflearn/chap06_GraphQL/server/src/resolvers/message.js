import { v4 } from 'uuid';
import { writeDB } from '../dbController.js';

const setMessages = (data) => {
  writeDB('messages', data);
};

/*
 * parent: parent 객체. 거의 사용X
 * args: Query에 필요한 필드에 제공되는 인수(parameter)
 * context: 로그인한 사용자. DB Access 등의 중요한 정보들
 */
const messageResolver = {
  Query: {
    messages: (parent, { cursor='' }, { db }) => {
      const fromIndex = db.messages.findIndex((message) => message.id === cursor) + 1;
      return db.messages?.slice(fromIndex, fromIndex + 15) || [];
    },
    message: (parent, { id='' }, { db }) => {
      return db.messages.find((message) => {
        return message.id === id;
      });
    },
  },
  Mutation: {
    createMessage: (parent, { text, userId }, { db }) => {
      if (!userId) throw Error('사용자가 없습니다.');
        const newMessage = {
          id: v4(),
          text: text,
          userId: userId,
          timestamp: Date.now(),
        };
      db.messages.unshift(newMessage);
      setMessages(db.messages);
      return newMessage;
    },
    updateMessage: (parent, { id, text, userId }, { db }) => {
      const targetIndex = db.messages.findIndex((message) => {
        return message.id === id;
      });
      if (targetIndex < 0) throw Error('메세지가 없습니다.');
      if (db.messages[targetIndex].userId !== userId) throw Error('사용자가 다릅니다.');

      const newMessage = {
        ...db.messages[targetIndex],
        text: text,
      };
      db.messages.splice(targetIndex, 1, newMessage);
      setMessages(db.messages);
      return newMessage;
    },
    deleteMessage: (parent, { id, userId }, { db }) => {
      const targetIndex = db.messages.findIndex((message) => {
        return message.id === id;
      });
      if (targetIndex < 0) throw Error('메세지가 없습니다.');
      if (db.messages[targetIndex].userId !== userId) throw Error('사용자가 다릅니다.');

      db.messages.splice(targetIndex, 1);
      setMessages(db.messages);
      return id;
    },
  },
};

export default messageResolver;
