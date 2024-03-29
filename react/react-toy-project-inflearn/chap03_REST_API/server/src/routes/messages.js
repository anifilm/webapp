import { v4 } from 'uuid';
import { readDB, writeDB } from '../dbController.js';

const getMessages = () => {
  return readDB('messages');
};
const setMessages = (data) => {
  writeDB('messages', data);
};

const messagesRoute = [
  {
    // Get Messages
    method: 'get',
    route: '/messages',
    handler: ({ query: { cursor='' } }, res) => {
      const messages = getMessages();
      const fromIndex = messages.findIndex((message) => message.id === cursor) + 1;
      res.send(messages.slice(fromIndex, fromIndex + 15));
    },
  },
  {
    // Get Messages
    method: 'get',
    route: '/messages/:id',
    handler: ({ params: { id } }, res) => {
      try {
        const messages = getMessages();
        const message = messages.find((message) => {
          return message.id === id;
        });
        if (!message) throw Error('not found message');
        res.send(message)
      }
      catch (err) {
        res.status(404).send({ error: err })
      }
    },
  },
  {
    // Create Messages
    method: 'post',
    route: '/messages',
    handler: ({ body }, res) => {
      try {
        if (!body.userId) throw Error('no userId');
        const messages = getMessages();
        const newMessage = {
          id: v4(),
          text: body.text,
          userId: body.userId,
          timestamp: Date.now(),
        };
        messages.unshift(newMessage);
        setMessages(messages);
        res.send(newMessage);
      }
      catch (err) {
        res.status(500).send({ error: err });
      }
    },
  },
  {
    // Update Messages
    method: 'put',
    route: '/messages/:id',
    handler: ({ body, params: { id } }, res) => {
      try {
        const messages = getMessages();
        const targetIndex = messages.findIndex((message) => {
          return message.id === id;
        });
        if (targetIndex < 0) throw '메세지가 없습니다.';
        if (messages[targetIndex].userId !== body.userId) throw '사용자가 다릅니다.';

        const newMessage = {
          ...messages[targetIndex],
          text: body.text,
        };
        messages.splice(targetIndex, 1, newMessage);
        setMessages(messages);
        res.send(newMessage);
      }
      catch (err) {
        res.status(500).send({ error: err });
      }
    },
  },
  {
    // Delete Messages
    method: 'delete',
    route: '/messages/:id',
    handler: ({ params: { id }, query: { userId } }, res) => {
      try {
        const messages = getMessages();
        const targetIndex = messages.findIndex((message) => {
          return message.id === id;
        });
        if (targetIndex < 0) throw '메세지가 없습니다.';
        if (messages[targetIndex].userId !== userId) throw '사용자가 다릅니다.';

        messages.splice(targetIndex, 1);
        setMessages(messages);
        res.send(id);
      }
      catch (err) {
        res.status(500).send({ error: err })
      }
    },
  },
];

export default messagesRoute;
