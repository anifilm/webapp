import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import { useQueryClient, useMutation, useInfiniteQuery } from 'react-query'

import { fetcher, QueryKeys, findTargetMsgIndex, getNewMessages } from '../queryClient';
import { GET_MESSAGES, CREATE_MESSAGE, UPDATE_MESSAGE, DELETE_MESSAGE } from '../graphql/message';
import useInfiniteScroll from '../hooks/useInfiniteScroll';

import MessageItem from './MessageItem';
import MessageInput from './MessageInput';

const MessageList = ({ startMesssages, users }) => {
  const client = useQueryClient();

  const { query } = useRouter();
  const userId = query.userId || query.userid || '';

  const [messages, setMessages] = useState(startMesssages);
  const [editingId, setEditingId] = useState(null);

  const fetchMoreEl = useRef(null);
  const intersecting = useInfiniteScroll(fetchMoreEl);

  const { mutate: onCreate } = useMutation(({ text }) => fetcher(CREATE_MESSAGE, { text, userId }), {
    onSuccess: ({ createMessage }) => {
      client.setQueryData(QueryKeys.MESSAGES, (old) => {
        return {
          messages: [createMessage, ...old.messages],
        };
      });
    },
  });

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

  const { data, error, isError, fetchNextPage, hasNextPage } = useInfiniteQuery(
    QueryKeys.MESSAGES,
    ({ pageParam = '' }) => fetcher(GET_MESSAGES, { cursor: pageParam }),
    {
      getNextPageParam: ({ messages }) => {
        return messages?.[messages.length - 1]?.id;
      },
    },
  );

  useEffect(() => {
    if (!data?.pages) return;
    console.log('messages changed');
    const mergedMessages = data.pages.flatMap((d) => d.messages);
    setMessages(mergedMessages);
  }, [data?.pages]);

  if (isError) {
    console.error(error);
    return null;
  }

  useEffect(() => {
    if (intersecting && hasNextPage) fetchNextPage();
  }, [intersecting, hasNextPage]);

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
            user={users.find((user) => user.id === x.userId)}
          />
        ))}
      </ul>
      <div ref={fetchMoreEl} style={{ border: '1px solid white' }}></div>
    </>
  );
};

export default MessageList;
