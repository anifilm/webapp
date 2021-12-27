import MessageList from '../components/MessageList';
import { fetcher } from '../queryClient';

import { GET_MESSAGES } from '../graphql/message';
import { GET_USERS } from '../graphql/user';

const Home = ({ startMesssages, users }) => (
  <>
    <h1>SIMPLE SNS</h1>
    <MessageList startMesssages={startMesssages} users={users} />
  </>
);

export const getServerSideProps = async () => {
  const { messages: startMesssages} = await fetcher(GET_MESSAGES);
  const { users } = await fetcher(GET_USERS);

  return {
    props: { startMesssages, users },
  };
};

export default Home;
