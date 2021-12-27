import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import fetcher from '../fetcher';

import MessageItem from './MessageItem';
import MessageInput from './MessageInput';

const MessageList = () => {
  const { query } = useRouter();
  const userId = query.userId || query.userid || '';

  const [messages, setMessages] = useState([]);
  const [editingId, setEditingId] = useState(null);

  const onCreate = async (text) => {
    const newMessage = await fetcher('post', '/messages', { text, userId });
    if (!newMessage) throw Error('something wrong');
    setMessages((messages) => {
      return [newMessage, ...messages];
    });
  };

  const onUpdate = async (text, id) => {
    const newMessage = await fetcher('put', `/messages/${id}`, { text, userId });
    if (!newMessage) throw Error('something wrong');
    setMessages((messages) => {
      const targetIndex = messages.findIndex((message) => {
        return message.id === id;
      });
      if (targetIndex < 0) return messages;
      const newMessages = [...messages];
      newMessages.splice(targetIndex, 1, newMessage);
      return newMessages;
    });
    doneEdit();
  };

  const onDelete = async (id) => {
    const receivedId = await fetcher('delete', `/messages/${id}`, { params: { userId } });
    setMessages((messages) => {
      const targetIndex = messages.findIndex((message) => {
        return message.id === receivedId + '';
      });
      if (targetIndex < 0) return messages;
      const newMessages = [...messages];
      newMessages.splice(targetIndex, 1);
      return newMessages;
    });
  };

  const doneEdit = () => {
    setEditingId(null);
  }

  const getMessages = async () => {
    const messages = await fetcher('get', '/messages');
    setMessages(messages);
  };

  useEffect(() => {
    getMessages();
  }, []);

  return (
    <>
      <MessageInput mutate={onCreate} />
      <ul className="messages">
        {messages.map((x) => (
          <MessageItem
            key={x.id}
            {...x}
            onUpdate={onUpdate}
            onDelete={() => onDelete(x.id)}
            startEdit={() => setEditingId(x.id)}
            isEditing={editingId === x.id}
            myId={userId}
          />
        ))}
      </ul>
    </>
  );
};

export default MessageList;
