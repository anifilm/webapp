import { useState } from 'react'

import MessageItem from './MessageItem';
import MessageInput from './MessageInput';

const UserIds = ['roy', 'jay'];
const getRamdomUserId = () => {
  return UserIds[Math.round(Math.random())];
};

const originalMessages = Array(50).fill(0).map((_, i) => {
  return {
    id: 50 - i,
    userId: getRamdomUserId(),
    timestamp: 1234567890123 + (50 - i) * 1000 * 60,
    text: `${50 - i} mock text`,
  };
});

const MessageList = () => {
  const [messages, setMessages] = useState(originalMessages);
  const [editingId, setEditingId] = useState(null);

  const onCreate = (text) => {
    const newMessage = {
      id: messages.length + 1,
      userId: getRamdomUserId(),
      timestamp: Date.now(),
      text: `${messages.length + 1} ${text}`,
    };
    setMessages((messages) => {
      return [newMessage, ...messages];
    });
  };

  const onUpdate = (text, id) => {
    setMessages((messages) => {
      const targetIndex = messages.findIndex((message) => {
        return message.id === id;
      });
      if (targetIndex < 0) return messages;
      const newMessages = [...messages];
      newMessages.splice(targetIndex, 1, {
        ...messages[targetIndex],
        text,
      });
      return newMessages;
    });
    doneEdit();
  };

  const onDelete = (id) => {
    setMessages((messages) => {
      const targetIndex = messages.findIndex((message) => {
        return message.id === id;
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
          />
        ))}
      </ul>
    </>
  );
};

export default MessageList;
