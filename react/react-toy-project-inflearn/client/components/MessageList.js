import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import { useQueryClient, useMutation, useQuery } from 'react-query'

import { fetcher, QueryKeys } from '../queryClient';
import { GET_MESSAGES, CREATE_MESSAGE, UPDATE_MESSAGE, DELETE_MESSAGE } from '../graphql/message';
//import useInfiniteScroll from '../hooks/useInfiniteScroll';

import MessageItem from './MessageItem';
import MessageInput from './MessageInput';

const MessageList = ({ startMesssages, users }) => {
  const client = useQueryClient();

  const { query } = useRouter();
  const userId = query.userId || query.userid || '';

  const [messages, setMessages] = useState(startMesssages);
  const [editingId, setEditingId] = useState(null);
  const [hasNext, setHasNext] = useState(true);

  //const fetchMoreEl = useRef(null);
  //const intersecting = useInfiniteScroll(fetchMoreEl);

  /*const onCreate = async (text) => {
    const newMessage = await fetcher('post', '/messages', { text, userId });
    if (!newMessage) throw Error('something wrong');
    setMessages((messages) => {
      return [newMessage, ...messages];
    });
  };*/
  const { mutate: onCreate } = useMutation(({ text }) => fetcher(CREATE_MESSAGE, { text, userId }), {
    onSuccess: ({ createMessage }) => {
      client.setQueryData(QueryKeys.MESSAGES, (old) => {
        return {
          messages: [createMessage, ...old.messages],
        };
      });
    },
  });

  /*const onUpdate = async (text, id) => {
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
  };*/
  const { mutate: onUpdate } = useMutation(({ text, id }) => fetcher(UPDATE_MESSAGE, { text, id, userId }), {
    onSuccess: ({ updateMessage }) => {
      client.setQueriesData(QueryKeys.MESSAGES, (old) => {
        const targetIndex = old.messages.findIndex((message) => message.id === updateMessage.id);
        if (targetIndex < 0) return old;
        const newMessages = [...old.messages];
        newMessages.splice(targetIndex, 1, updateMessage);
        return {
          messages: newMessages,
        };
      });
      doneEdit();
    },
  });

  /*const onDelete = async (id) => {
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
  };*/
  const { mutate: onDelete } = useMutation(id => fetcher(DELETE_MESSAGE, { id, userId }), {
    onSuccess: ({ deleteMessage: deletedId }) => {
      client.setQueryData(QueryKeys.MESSAGES, (old) => {
        const targetIndex = old.messages.findIndex((message) => message.id === deletedId);
        if (targetIndex < 0) return old;
        const newMsgs = [...old.messages];
        newMsgs.splice(targetIndex, 1);
        return {
          messages: newMsgs,
        };
      });
    },
  });

  const doneEdit = () => {
    setEditingId(null);
  }

  /*const getMessages = async () => {
    const newMessages = await fetcher('get', '/messages', { params: { cursor: messages[messages.length - 1]?.id || '' } });
    if (newMessages.length === 0) {
      setHasNext(false);
      return;
    }
    setMessages((messages) => {
      return [...messages, ...newMessages];
    });
  };*/
  const { data, error, isError } = useQuery(QueryKeys.MESSAGES, () => {
    return fetcher(GET_MESSAGES);
  });

  useEffect(() => {
    if (!data?.messages) return;
    console.log('messages changed');
    setMessages(data.messages);
  }, [data?.messages]);

  if (isError) {
    console.error(error);
    return null;
  }

  return (
    <>
      {userId && <MessageInput mutate={onCreate} />}
      <ul className="messages">
        {messages.map(x => (
          <MessageItem
            key={x.id}
            {...x}
            onUpdate={onUpdate}
            onDelete={() => onDelete(x.id)}
            startEdit={() => setEditingId(x.id)}
            isEditing={editingId === x.id}
            myId={userId}
            user={users.find((user) => user.id === x.userId)}
          />
        ))}
      </ul>
      {/* <div ref={fetchMoreEl} /> */}
    </>
  );
};

export default MessageList;
