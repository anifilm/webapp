import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import fetcher from '../fetcher';
import useInfiniteScroll from '../hooks/useInfiniteScroll';

import MessageItem from './MessageItem';
import MessageInput from './MessageInput';

const MessageList = () => {
  const { query } = useRouter();
  const userId = query.userId || query.userid || '';

  const [messages, setMessages] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [hasNext, setHasNext] = useState(true);

  const fetchMoreEl = useRef(null);
  const intersecting = useInfiniteScroll(fetchMoreEl);

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
    const newMessages = await fetcher('get', '/messages', { params: { cursor: messages[messages.length - 1]?.id || '' } });
    if (newMessages.length === 0) {
      setHasNext(false);
      return;
    }
    setMessages((messages) => {
      return [...messages, ...newMessages];
    });
  };

  useEffect(() => {
    if (intersecting && hasNext) getMessages();
  }, [intersecting]);

  return (
    <>
      {userId && <MessageInput mutate={onCreate} />}
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
      <div ref={fetchMoreEl} style={{ border: '1px solid white' }}></div>
    </>
  );
};

export default MessageList;
